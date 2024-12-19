import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, fetchTopics } from '../api';
import { List, ListItem, ListItemText, Chip } from '@mui/material';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [topics, setTopics] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const projectsData = await fetchProjects();
            const topicsData = await fetchTopics();
            const topicsMap = topicsData.reduce((acc, topic) => {
                acc[topic.id] = topic.name;
                return acc;
            }, {});
            setTopics(topicsMap);
            setProjects(projectsData);
        };

        fetchData();
    }, []);

    return (
        <List>
            {projects.map((project) => (
                <ListItem key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <ListItemText
                            primary={project.name}
                            secondary={project.description}
                        />
                    </Link>
                    {project.topic_id && (
                        <Chip label={topics[project.topic_id]} color="primary" />
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default ProjectList;
