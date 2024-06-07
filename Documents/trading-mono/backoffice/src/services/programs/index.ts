import { rvApi } from "@/api";

interface Props {
  page: number;
}

export const getProgramsApi = async ({ page }: Props) => {
  const { data } = await rvApi.get(`/programs?page=${page}`);
  return data;
};

export const createProgramApi = async (program: any) => {
  const { data } = await rvApi.post(`/programs`, program);
  return data;
};

export const deleteProgramApi = async (uuid: string) => {
  const { data } = await rvApi.get(`/programs/${uuid}/delete`);
  return data;
};

export const updateProgramApi = async (game: any) => {
  const { data } = await rvApi.put(`/programs`, game);
  return data;
};
