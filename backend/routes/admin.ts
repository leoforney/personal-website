import {createPost, updatePost} from "../controllers/postsController";

const ADMIN_PASSWORD = "password";

export default async function adminRoute(req: Request, pool: any) {
    const url = new URL(req.url);
    const password = url.searchParams.get("password");

    if (password !== ADMIN_PASSWORD) {
        return new Response("Unauthorized", { status: 401 });
    }

    if (req.method === "POST" && url.pathname.includes("/api/admin/create-post")) {
        const data = await req.json();
        const post = await createPost(pool, data);
        return new Response(JSON.stringify(post), { status: 201 });
    }

    if (req.method === "PATCH" && url.pathname.includes("/api/admin/update-post")) {
        const data: any = await req.json();
        const postId = data.post_id;
        const post = await updatePost(pool, postId, data);
        return new Response(JSON.stringify(post), { status: 201 });
    }

    return new Response("Not found", { status: 404 });
}