import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import DrawerAppBar from "./DrawerAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown'
import DetailView from "./DetailView";

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
            cases: []
        }
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('cases/caselist.txt')
            .then(response => response.text())
            .then(data => {
                var linesplit = data.split(/\r\n|\r|\n/g);
                for (var i = 0; i < linesplit.length; i++) {
                    if (linesplit[i] === "") {
                        linesplit.splice(i, 1);
                    }
                }
                console.log(linesplit)
                this.setState({cases: linesplit})
            });
    }

    render() {
        return (
            <div>
                {this.state.cases.map((storycase, i) => {
                    return (
                        <DetailView key={i} filename={storycase}/>
                    )
                })}
            </div>
        )
    }

}

export default App;
