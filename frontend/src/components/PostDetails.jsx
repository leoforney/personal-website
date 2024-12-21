import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../api';
import { Typography, Box } from '@mui/material';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot, $getNodeByKey } from 'lexical';

const ReadOnlyPlugin = ({ initialContent }) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.update(() => {
            const parsedContent = JSON.parse(initialContent);
            editor.setEditorState(editor.parseEditorState(parsedContent));
        });
    }, [editor, initialContent]);

    return null;
};

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

    const initialConfig = {
        namespace: 'PostDetailsEditor',
        onError: (error) => console.error(error),
        editable: false,
        nodes: [], // Add custom nodes if needed
    };

    return (
        <Box>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="subtitle1">
                Last updated: {post.updated_at || post.created_at}
            </Typography>
            <Box sx={{ mt: 2 }}>
                <LexicalComposer initialConfig={initialConfig}>
                    <ReadOnlyPlugin initialContent={post.content_html} />
                    <ContentEditable className="readonly-editor" />
                    <HistoryPlugin />
                </LexicalComposer>
            </Box>
        </Box>
    );
};

export default PostDetails;
