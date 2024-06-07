import { rvApi } from "@/api"

export const getCollaborators = async ({limit}: any) => {
    const { data } = await rvApi.get(`/admins?limit=${limit}`);
    return data;
}

export const deleteCollaborator = async (uuid: string) => {
    const { data } = await rvApi.delete(`/admins/${uuid}`);
    return data;
}