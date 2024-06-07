import { rvApi } from "@/api"

export const getProductsApi = async () => {
    const { data } = await rvApi.get('/products');
    return data;
}

export const createProductApi = async (product: any) => {
    const { data } = await rvApi.post('/products', product);
    return data;
}

export const deleteProduct = async (uuid: string) => {
    const { data } = await rvApi.delete(`/products/${uuid}`);
    return data;
}