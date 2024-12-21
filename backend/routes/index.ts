import postsRoute from "./posts";
import projectsRoute from "./projects";
import topicsRoute from "./topics";
import adminRoute from "./admin";
import { join } from "path";
import { readFile } from "fs/promises";
import dotenv from "dotenv";
import {serveStaticFile} from "./static.ts";
import {vcardRoute} from "./vcard.ts";

// Load environment variables
dotenv.config();

export default async function router(req: Request, pool: any) {
    const url = new URL(req.url);

    // API routes
    if (url.pathname.startsWith("/api/posts")) {
        return postsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/projects")) {
        return projectsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/topics")) {
        return topicsRoute(req, pool);
    } else if (url.pathname.startsWith("/api/admin")) {
        return adminRoute(req, pool);
    } else if (url.pathname.startsWith("/api/leo.vcf")) {
        return vcardRoute(req);
    }

    // Serve static files
    return serveStaticFile(req);
}
