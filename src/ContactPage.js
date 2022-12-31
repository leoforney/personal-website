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


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socials: [
                {
                    "name": "LinkedIn",
                    "icon": <LinkedInIcon />,
                    "link": "https://www.linkedin.com/in/leo-forney-82850317a/"
                },
                {
                    "name": "GitHub",
                    "icon": <GitHubIcon />,
                    "link": "https://github.com/leoforney"
                },
                {
                    "name": "Email",
                    "icon": <EmailIcon />,
                    "link": "mailto:forneyleo@gmail.com"
                },
            ]
        }
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

                <Card sx={{ justifyContent: "center"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{maxHeight: "40vh"}}
                        image="/img/headshot1.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Let's talk!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I'm always open to a good discussion about anything. Whether that be a business proposal,
                            job offer, networking, or just chatting.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <List>
                            {this.state.socials.map((social) => {
                                return (
                                    <ListItemButton size="small" href={social.link}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                {social.icon}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={social.name}/>
                                    </ListItemButton>
                                )
                            })}
                            <Button href="/leo-forney.vcf">
                                Save contact
                            </Button>
                        </List>

                    </CardActions>
                </Card>
                <Box sx={{height: 15}} />

            </Grid>

        )
    }

}

export default ContactPage;
