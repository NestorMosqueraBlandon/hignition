import { updateComputerCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditComputerCategory = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editComputerCategory } = useMutation({
    mutationFn: updateComputerCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["computer-categories"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isEditing, editComputerCategory };
};
