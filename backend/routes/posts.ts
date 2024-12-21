import {
    createPost,
    getPostById,
    getAllPosts,
    getPostsByProjectId, // Assume you have or will create this function
    updatePost
} from "../controllers/postsController";
import adminRoute from "./admin.ts";

export default async function postsRoute(req: Request, pool: any) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const projectId = url.searchParams.get("project_id");

    if (req.method === "GET") {
        if (id) {
            const post = await getPostById(pool, parseInt(id));
            return new Response(JSON.stringify(post), { status: 200 });
        } else if (projectId) {
            const posts = await getPostsByProjectId(pool, parseInt(projectId))
            return new Response(JSON.stringify(posts), { status: 200 });
        } else {
            const posts = await getAllPosts(pool);
            return new Response(JSON.stringify(posts), { status: 200 });
        }
    }

    if (req.method === "POST") {
        const deniedResponse = await adminRoute(req, pool);
        if (deniedResponse) {
            return deniedResponse;
        }
        const body = await req.json();
        const newPost = await createPost(pool, body);
        return new Response(JSON.stringify(newPost), { status: 201 });
    }

    if (req.method === "PATCH") {
        const deniedResponse = await adminRoute(req, pool);
        if (deniedResponse) {
            return deniedResponse;
        }
        const data: any = await req.json();
        const postId = data.id;
        const post = await updatePost(pool, postId, data);
        return new Response(JSON.stringify(post), { status: 201 });
    }

    return new Response("Method not allowed", { status: 405 });
}
