import './App.css';
import React from 'react';
import DrawerAppBar from "./DrawerAppBar.jsx";
import ContactPage from "./ContactPage.jsx";
import {Container, createTheme, Fab, Fade, ThemeProvider, useScrollTrigger} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./NotFoundPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />}>
            <Route path="" element={<AboutPage/>}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="/projects" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="contact" element={<ContactPage/>}/>
        </Route>
    )
);

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            "Source Code Pro",
            "Menlo",
            "Monaco",
            "Consolas",
            "Monospaced"
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
            `,
        }
    }
});


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: ""
        }
    }

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <ElevationScroll {...this.props}>
                        <DrawerAppBar />
                    </ElevationScroll>
                    <Box sx={{height: 0}} id="back-to-top-anchor" />
                    <Container maxWidth={"xl"}>
                        <RouterProvider router={router} />
                    </Container>

                    <ScrollTop {...this.props}>
                        <Fab size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </ThemeProvider>
            </div>
        )
    }

}

export default App;
