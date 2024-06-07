import { rvApi } from "@/api";

interface Props {
  page: number;
}

export const getProductCategoriesApi = async ({ page }: Props) => {
  const { data } = await rvApi.get(`/product-categories?page=${page}`);
  return data;
};

export const createProductCategoryApi = async (program: any) => {
  const { data } = await rvApi.post(`/product-categories`, program);
  return data;
};

export const deleteProductCategoryApi = async (uuid: string) => {
  const { data } = await rvApi.get(`/product-categories/${uuid}/delete`);
  return data;
};

export const updateProductCategoryApi = async (game: any) => {
  const { data } = await rvApi.put(`/product-categories`, game);
  return data;
};
