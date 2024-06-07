import { deleteComputerCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteComputerCategory = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteComputerCategory } = useMutation(
    {
      mutationFn: deleteComputerCategoryApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["computer-categories"],
        });
      },
    }
  );

  return { isDeleting, deleteComputerCategory };
};
