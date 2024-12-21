import React from "react";
import {List, ListItem, FormControlLabel, Checkbox, Typography, Button} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const TopicsList = ({ topics }) => (
    <>
        <Box sx={{ display: 'flex' }}>
            <Typography variant="h6">Topics</Typography>
            <Button style={{ marginLeft: '6px' }}>
                + New Topic
            </Button>
        </Box>

        <List sx={{overflow: 'auto', maxHeight: 300}}>
            {topics.map((topic) => (
                <ListItem key={topic.id}>
                    <ListItemText primary={topic.name} />
                </ListItem>
            ))}
        </List>
    </>
);

export default TopicsList;
