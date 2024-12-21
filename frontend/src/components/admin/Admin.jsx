import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import {
    fetchProjects,
    fetchTopics,
    fetchPostsByProjectId,
    savePost,
    updatePost,
    saveTopics,
    createProject
} from "../../api.js";
import AdminProjectsList from "./AdminProjectList";
import AdminPostsList from "./AdminPostsList";
import AdminTopicsList from "./AdminTopicsList";
import PostEditor from "./PostEditor";

const Admin = () => {
    const [projects, setProjects] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [editorState, setEditorState] = useState({});
    const [isCreating, setIsCreating] = useState(false);
    const [postTitle, setPostTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const projectsData = await fetchProjects();
            const topicsData = await fetchTopics();
            setProjects(projectsData);
            setTopics(topicsData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            if (selectedProject) {
                const postsData = await fetchPostsByProjectId(selectedProject.id);
                setPosts(postsData);
            }
        };
        fetchPosts();
    }, [selectedProject]);

    const handleSavePost = async () => {
        const content_html = JSON.stringify(editorState);
        if (isCreating) {
            await savePost({ project_id: selectedProject.id, topic_ids: selectedTopics, title: postTitle, content_html });
        } else {
            await updatePost({ ...selectedPost, title: postTitle, content_html });
        }
        const postsData = await fetchPostsByProjectId(selectedProject.id);
        setPosts(postsData);
        setIsCreating(false);
    };

    return (
        <Box style={{ padding: "16px", border: "1px solid #ccc" }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <AdminProjectsList
                        projects={projects}
                        topics={topics}
                        selectedProject={selectedProject}
                        onProjectSelect={setSelectedProject}
                        onAddProject={async () => {
                            const projectsData = await fetchProjects();
                            setProjects(projectsData);
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <AdminPostsList
                        posts={posts}
                        selectedPost={selectedPost}
                        onPostSelect={(post) => {
                            setSelectedPost(post);
                            setEditorState(JSON.parse(post.content_html));
                            setPostTitle(post.title);
                            setIsCreating(false);
                        }}
                        onCreatePost={() => {
                            setSelectedPost(null);
                            setEditorState({});
                            setPostTitle("");
                            setIsCreating(true);
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <AdminTopicsList
                        topics={topics}
                    />
                </Grid>
            </Grid>
            {(selectedPost || isCreating) && (
                <PostEditor
                    editorState={editorState}
                    setEditorState={setEditorState}
                    postTitle={postTitle}
                    setPostTitle={setPostTitle}
                    onSavePost={handleSavePost}
                />
            )}
        </Box>
    );
};

export default Admin;
