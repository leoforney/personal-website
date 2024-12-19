import React from 'react';
import Typography from "@mui/material/Typography";
import {Avatar, Card, CardActions, CardContent, CardMedia, Grid, ListItemAvatar} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


class ErrorPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >

                <Box sx={{ justifyContent: "center", textJustify: "center", mt: "15%"}}>
                    <Typography variant="h1" gutterBottom>
                        Page not found
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Are you sure you have the correct link?
                    </Typography>
                </Box>
                <Box sx={{height: 15}} />

            </Grid>

        )
    }

}

export default ErrorPage;
