import postsRoute from "./posts";
import projectsRoute from "./projects";
import topicsRoute from "./topics";
import adminRoute from "./admin";

export default async function router(req: Request, pool: any) {
    const url = new URL(req.url);

    if (url.pathname.startsWith("/api/posts")) {
        return postsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/projects")) {
        return projectsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/topics")) {
        return topicsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/admin")) {
        return adminRoute(req, pool);
    }

    // Default response
    return new Response("Hello from Bun!", { status: 200 });
}