import { insertProject, fetchProjectById, fetchAllProjects } from "../models/projectModel";

export async function getProjectById(pool: any, id: number) {
    return await fetchProjectById(pool, id);
}

export async function getAllProjects(pool: any) {
    return await fetchAllProjects(pool);
}

export async function createProject(pool: any, data: any) {
    console.log(data);
    return await insertProject(pool, data);
}
