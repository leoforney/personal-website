import { createProject, getProjectById, getAllProjects } from "../controllers/projectsController";
import adminRoute from "./admin.ts";

export default async function projectsRoute(req: Request, pool: any) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (req.method === "GET") {
        if (id) {
            const project = await getProjectById(pool, parseInt(id));
            return new Response(JSON.stringify(project), { status: 200 });
        } else {
            const projects = await getAllProjects(pool);
            return new Response(JSON.stringify(projects), { status: 200 });
        }
    }

    if (req.method === "POST") {
        const deniedResponse = await adminRoute(req, pool);
        if (deniedResponse) {
            return deniedResponse;
        }
        const body = await req.json();
        console.log(body)
        const newProject = await createProject(pool, body);
        return new Response(JSON.stringify(newProject), { status: 201 });
    }

    return new Response("Method not allowed", { status: 405 });
}