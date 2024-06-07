import { rvApi } from "@/api";

interface Props {
  page: number;
}

export const getComputerCategoriesApi = async ({ page }: Props) => {
  const { data } = await rvApi.get(`/computer-categories?page=${page}`);
  return data;
};

export const createComputerCategoryApi = async (computer: any) => {
  const { data } = await rvApi.post(`/computer-categories`, computer);
  return data;
};

export const deleteComputerCategoryApi = async (uuid: string) => {
  const { data } = await rvApi.get(`/computer-categories/${uuid}/delete`);
  return data;
};

export const updateComputerCategoryApi = async (game: any) => {
  const { data } = await rvApi.put(`/computer-categories`, game);
  return data;
};
