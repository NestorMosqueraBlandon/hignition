import { createProductCategoryApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProductCategory = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createProductCategory } = useMutation({
    mutationFn: createProductCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product-categories"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createProductCategory };
};
