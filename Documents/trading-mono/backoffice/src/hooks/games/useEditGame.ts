import { updateGameApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditGame = () => {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editGame } = useMutation({
    mutationFn: updateGameApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isEditing, editGame };
};
