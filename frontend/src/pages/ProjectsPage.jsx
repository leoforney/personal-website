import React from 'react';
import ProjectList from '../components/ProjectList';
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ProjectsPage = () => {
    return (
        <Container maxWidth={"sm"} fixed>
            <Box>
                <Typography variant={"h2"}>Projects</Typography>
                <Divider sx={{mt: 2}}/>
                <ProjectList />
            </Box>
        </Container>
    );
};

export default ProjectsPage;
