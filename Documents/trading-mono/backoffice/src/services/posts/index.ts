import { rvApi } from "@/api";
import { CreatePostDto, UpdatePostDto } from "@rv/entities";

interface Props {
  page: number;
}

export const getPostsApi = async ({ page }: Props) => {
  const { data } = await rvApi.get(`/posts?page=${page}`);
  return data;
};

export const createPostApi = async (post: Partial<CreatePostDto>) => {
  const { data } = await rvApi.post(`/posts`, post);
  return data;
};

export const deletePostApi = async (uuid: string) => {
  const { data } = await rvApi.get(`/posts/${uuid}/delete`);
  return data;
};

export const updatePostApi = async (post: UpdatePostDto) => {
  const { data } = await rvApi.put(`/posts`, post);
  return data;
};
