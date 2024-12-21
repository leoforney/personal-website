import React from "react";
import {Button, List, ListItem, ListItemText, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const PostsList = ({posts, selectedPost, onPostSelect, onCreatePost}) => (<>
        <Box sx={{ display: 'flex' }}>
            <Typography variant="h6">Posts</Typography>
            <Button onClick={onCreatePost} style={{ marginLeft: '6px' }}>
                + New Post
            </Button>
        </Box>

        <List>
            {posts.map((post) => (<ListItem
                    key={post.id}
                    button
                    selected={selectedPost?.id === post.id}
                    onClick={() => onPostSelect(post)}
                >
                    <ListItemText primary={post.title} secondary={`Updated: ${post.updated_at}`}/>
                </ListItem>))}
        </List>
    </>);

export default PostsList;
