import { rvApi } from "@/api";

export const loginApi = async({username, password}:any) => {
    const { data } = await rvApi.post(`/auth/login`, {username, password});
    localStorage.setItem('token', JSON.stringify(data.token))
    return data;
}

export const getCurrentUser = async () => {
    const token = JSON.parse(localStorage.getItem('token') || "")
    const { data } = await rvApi.get(`/admins/info`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
    return data;
}