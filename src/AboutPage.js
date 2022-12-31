import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid } from "@mui/material";
import Box from "@mui/material/Box";
import './About.css';
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class AboutPage extends React.Component {

/*    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }*/

    render() {
        const { classes } = this.props;

        return (
            <Box>
                <Grid container sx={{display: "flex", flexDirection: "row"}}>
                    <Grid item xs={12} md={4} sx={{height: "100%", width: "100%"}} component="img"
                          src={"img/stairs.jpg"} alt={"Me"} sx={{
                        borderRadius: "10px"
                    }}>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{pl: 5, pr: 5}}>
                        <Typography variant={"h1"} className={"flashingText"} sx={{
                            fontFamily: ["source-code-pro", "Menlo", "Monaco", "Consolas",
                                "monospace"]
                        }}>
                            Hi I'm Leo
                        </Typography>
                        <Typography variant={"h4"} sx={{
                            fontFamily: ["source-code-pro", "Menlo", "Monaco", "Consolas",
                                "monospace"]
                        }}>
                            I'm a software developer based out of Chicago who's extremely passionate about devising software that helps people.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{height: "100%", width: "100%", mt: 5, mb: 10}}>
                        <Button variant={"outlined"} sx={{height: "100%", width: "100%"}} href={"/projects"}>Check out my work</Button>
                    </Grid>
                </Grid>
                <CssBaseline/>
            </Box>

        )
    }

}

export default AboutPage;
