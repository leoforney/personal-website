import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Editor } from "./Editor.jsx";

const PostEditor = ({ editorState, setEditorState, postTitle, setPostTitle, onSavePost }) => (
    <Box style={{ marginTop: "16px" }}>
        <TextField
            fullWidth
            label="Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            style={{ marginBottom: "8px" }}
        />
        <Editor editorState={editorState} setEditorState={setEditorState} />
        <Button
            onClick={onSavePost}
            variant="contained"
            color="primary"
            style={{ marginTop: "8px" }}
        >
            Save Post
        </Button>
    </Box>
);

export default PostEditor;
