import { createComputerCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateComputerCategory = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createComputerCategory } = useMutation({
    mutationFn: createComputerCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["computer-categories"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createComputerCategory };
};
