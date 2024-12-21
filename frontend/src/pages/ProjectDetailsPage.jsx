import ProjectDetails from '../components/ProjectDetails';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPostsByProjectId, fetchProjectById} from "../api.js";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const project = await fetchProjectById(id);
            console.log(project)
            setProject(project);
        };

        fetchData();
    }, [id]);

    return (
        <Container maxWidth={"sm"} fixed>
            <Typography variant={"h2"}>{project ? project.name : ""}: Posts</Typography>
            <Divider sx={{mt: 2}}/>
            <ProjectDetails/>
        </Container>
    );
};

export default ProjectDetailsPage;
