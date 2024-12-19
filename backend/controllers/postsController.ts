import { insertPost, fetchPostById, fetchAllPosts, updatePostById } from "../models/postModel";
import { convertDraftToHtml } from "../utils/convertEditorData";

export async function getPostById(pool: any, id: number) {
    return await fetchPostById(pool, id);
}

export async function getAllPosts(pool: any) {
    return await fetchAllPosts(pool);
}

export async function createPost(pool: any, data: any) {
    // Suppose `data` looks like { project_id: number, draftContent: JSON, title: string }
    const content_html = convertDraftToHtml(data.draftContent);
    return await insertPost(pool, {
        project_id: data.project_id,
        content_html,
        title: data.title,
    });
}

export async function updatePost(pool: any, id: number, data: any) {
    // Suppose `data` looks like { project_id: number, draftContent: JSON, title: string }
    const content_html = convertDraftToHtml(data.draftContent);
    return await updatePostById(pool, id, {
        project_id: data.project_id,
        content_html,
        title: data.title,
    });
}