import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostsByProjectId } from '../api';
import { List, ListItem, ListItemText } from '@mui/material';

const ProjectDetails = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await fetchPostsByProjectId(id);
            setPosts(postsData);
        };

        fetchData();
    }, [id]);

    return (
        <List>
            {posts.map((post) => (
                <ListItem key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <ListItemText
                            primary={post.title} // Secondary should be topic in a pill
                            secondary={`Last updated: ${
                                post.updated_at || post.created_at
                            }`}
                        />
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default ProjectDetails;
