import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../api';
import { Typography, Box } from '@mui/material';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const postData = await fetchPostById(id);
            setPost(postData);
        };

        fetchData();
    }, [id]);

    if (!post) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="subtitle1">
                Last updated: {post.updated_at || post.created_at}
            </Typography>
            <Box
                sx={{ mt: 2 }}
                dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
        </Box>
    );
};

export default PostDetails;
