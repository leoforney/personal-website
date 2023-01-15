import React from 'react';
import Typography from "@mui/material/Typography";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import './About.css';
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

const theme = createTheme({
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

class AboutPage extends React.Component {

    render() {

        return (
            <Box>
                <ThemeProvider theme={theme}>
                    <Grid container sx={{display: "flex", flexDirection: "row"}}>
                        <CssBaseline/>
                        <Grid item xs={12} md={4} component="img"
                              src={"img/stairs.jpg"} alt={"Me"} sx={{
                            height: "100%", width: "100%",
                            borderRadius: "10px",
                            aspectRatio: "1 / 1"
                        }}>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{pl: 5, pr: 5}}>
                            <Typography variant={"h1"} className={"flashingText"}>
                                Hi I'm Leo
                            </Typography>
                            <Typography variant={"h4"}>
                                I'm a software developer based out of Chicago who's extremely passionate about devising
                                software that helps people.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{height: "100%", width: "100%", mt: 5, mb: 10}}>
                            <Button variant={"contained"} sx={{height: "100%", width: "100%"}} href={"/projects"}>Check
                                out my work</Button>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Box>

        )
    }

}

export default AboutPage;
