import { createPost, getPostById, getAllPosts } from "../controllers/postsController";

export default async function postsRoute(req: Request, pool: any) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (req.method === "GET") {
        if (id) {
            const post = await getPostById(pool, parseInt(id));
            return new Response(JSON.stringify(post), { status: 200 });
        } else {
            const posts = await getAllPosts(pool);
            return new Response(JSON.stringify(posts), { status: 200 });
        }
    }

    if (req.method === "POST") {
        const body = await req.json();
        const newPost = await createPost(pool, body);
        return new Response(JSON.stringify(newPost), { status: 201 });
    }

    return new Response("Method not allowed", { status: 405 });
}