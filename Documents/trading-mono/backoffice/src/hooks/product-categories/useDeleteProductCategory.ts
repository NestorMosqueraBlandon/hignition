import { deleteProductCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteProductCategory = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProductCategory } = useMutation({
    mutationFn: deleteProductCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product-categories"],
      });
    },
  });

  return { isDeleting, deleteProductCategory };
};
