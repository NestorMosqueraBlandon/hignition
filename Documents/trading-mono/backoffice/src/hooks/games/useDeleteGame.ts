import { deleteGameApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteGame = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteGame } = useMutation({
    mutationFn: deleteGameApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
    },
  });

  return { isDeleting, deleteGame };
};
