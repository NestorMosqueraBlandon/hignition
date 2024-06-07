import { rvApi } from "@/api";

interface Props{
    page: number;
    project: string | null;
}

export const getIssues = async ({page, project}:Props) => {
    const { data } = await rvApi.get(`/issues/${project}?page=${page}&limit=100000`);
    return data;
}

export const getIssueById = async (uuid:string) => {
    const { data } = await rvApi.get(`/issues/${uuid}/one`);
    return data;
}


export const createIssueApi = async (issue: any) => {
    const { data } = await rvApi.post(`/issues`, issue);
    return data;
}


export const updateIssueApi = async (issue: any) => {
    const { data } = await rvApi.patch(`/issues`, issue);
    return data;
}

export const getIssuesByProjectId = async (uuid: string) => {
    const { data } = await rvApi.get(`/issues/${uuid}/project?limit=100000`);
    return data;
}


export const deleteIssueApi = async (uuid: string) => {
    const { data } = await rvApi.get(`/issues/${uuid}/delete`);
    return data;
}
