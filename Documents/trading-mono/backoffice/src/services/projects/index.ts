import { rvApi } from "@/api";
import { Project, Result } from "@rv/entities";

export const getProjects = async (): Promise<Result<Project>> => {
    const { data } = await rvApi.get('/projects');
    return data;
}

export const deleteProject = async (uuid: string) => {
    const { data } = await rvApi.get(`/projects/${uuid}/delete`);
    return data;
}

export const createProjectApi = async (project: any) => {
    const { data } = await rvApi.post(`/projects`, project);
    return data;
}

export const getProjectById = async (uuid:string) => {
    const { data } = await rvApi.get(`/projects/${uuid}/one`);
    return data;
}

