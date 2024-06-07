import { createGameApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreategames = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createGame } = useMutation({
    mutationFn: createGameApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createGame };
};
