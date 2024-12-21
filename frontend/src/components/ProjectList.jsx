import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, fetchTopics } from '../api';
import { List, ListItem, ListItemText, Chip, Box, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {NoEntries} from "./NoEntries.jsx";

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
        <>
            {projects.length === 0 ? (
                <NoEntries />
            ) : (
                <List sx={{ width: '100%' }}>
                    {projects.map((project) => (
                        <ListItem
                            key={project.id}
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <Box style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                <Link
                                    to={`/projects/${project.id}`}
                                    style={{
                                        flexGrow: 1,
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                >
                                    <ListItemText
                                        primary={project.name}
                                        secondary={project.description}
                                    />
                                </Link>
                                {project.topic_id && (
                                    <Chip
                                        label={topics[project.topic_id]}
                                        color="primary"
                                        style={{ marginLeft: '8px' }}
                                    />
                                )}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
};

export default ProjectList;
