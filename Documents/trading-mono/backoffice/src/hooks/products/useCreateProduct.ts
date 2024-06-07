import { createProductApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createProduct } = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createProduct };
};
