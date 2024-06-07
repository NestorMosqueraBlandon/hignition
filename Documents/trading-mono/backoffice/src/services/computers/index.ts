import { rvApi } from "@/api"

export const getComputersApi = async () => {
    const { data } = await rvApi.get('/computers');
    return data;
}

export const createComputerApi = async (product: any) => {
    const { data } = await rvApi.post('/computers', product);
    return data;
}

export const deleteComputerApi = async (uuid: string) => {
    const { data } = await rvApi.delete(`/computers/${uuid}`);
    return data;
}