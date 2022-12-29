import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import DrawerAppBar from "./DrawerAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown'
import HomePage from "./HomePage";
import {Container, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

/*import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            {/!* ... etc. *!/}
        </Route>
    )
);*/

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
                <DrawerAppBar>
                    <Container fixed>
                        <HomePage />
                    </Container>

                </DrawerAppBar>
            </div>
        )
    }

}

export default App;
