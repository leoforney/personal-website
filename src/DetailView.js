import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import DrawerAppBar from "./DrawerAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown'
import {Card, CardContent} from "@mui/material";

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: ""
        }
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('cases/' + this.props.filename)
            .then(response => response.text())
            .then(data => this.setState({markdown: data}));
    }

    render() {
        return (
            <Card sx={{pt: 2, pb: 2, pl: 5, pr: 5, mt: 5, mb: 5, background: }}>
                <CardContent>
                    <Typography variant="body1">
                        <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
                    </Typography>
                </CardContent>
            </Card>

        )
    }

}

export default DetailView;
