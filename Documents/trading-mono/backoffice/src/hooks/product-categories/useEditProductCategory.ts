import { updateProductCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditProductCategory = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editProductCategory } = useMutation({
    mutationFn: updateProductCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product-categories"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isEditing, editProductCategory };
};
