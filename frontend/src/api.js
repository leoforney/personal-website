const BASE_URL = 'http://localhost:3000/api';

export const fetchProjects = async () => {
    const response = await fetch(`${BASE_URL}/projects`);
    return response.json();
};

export const fetchTopics = async () => {
    const response = await fetch(`${BASE_URL}/topics`);
    return response.json();
};

export const fetchPostsByProjectId = async (projectId) => {
    const response = await fetch(`${BASE_URL}/posts?project_id=${projectId}`);
    return response.json();
};

export const fetchPostById = async (postId) => {
    const response = await fetch(`${BASE_URL}/posts?id=${postId}`);
    return response.json();
};
