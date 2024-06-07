import { rvApi } from "@/api";

interface Props {
  page: number;
}

export const getGamesApi = async ({ page }: Props) => {
  const { data } = await rvApi.get(`/games?page=${page}`);
  return data;
};

export const createGameApi = async (game: any) => {
  const { data } = await rvApi.post(`/games`, game);
  return data;
};

export const deleteGameApi = async (uuid: string) => {
  const { data } = await rvApi.get(`/games/${uuid}/delete`);
  return data;
};

export const updateGameApi = async (game: any) => {
    const { data } = await rvApi.put(`/games`, game);
    return data;
  };
