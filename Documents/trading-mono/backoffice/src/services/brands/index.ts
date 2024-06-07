import { rvApi } from "@/api";

interface Props {
  page: number;
}

export const getBrands = async ({ page }: Props) => {
  try {
    const { data } = await rvApi.get(`/brands?page=${page}`);
    return data;
  } catch (error:any) {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login'
      throw new Error('No autorizado. Debes iniciar sesión.');
    }
    throw error;
  }
};

export const createBrand = async (brand: any) => {
  try {
    const { data } = await rvApi.post(`/brands`, brand);
    return data;
  } catch (error) {
    window.location.href = '/login'

    // Manejar el error aquí, de acuerdo a tus necesidades.
    throw error;
  }
};


export const editBrandApi = async (brand: any) => {
  try {
    const { data } = await rvApi.patch(`/brands`, brand);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteBrand = async (uuid: string) => {
  try {
    const { data } = await rvApi.get(`/brands/${uuid}/delete`);
    return data;
  } catch (error) {
    window.location.href = '/login'

    // Manejar el error aquí, de acuerdo a tus necesidades.
    throw error;
  }
};
