import { deleteBrand as deleteBrandApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBrand = () => {
    const queryClient = useQueryClient();
  
    const {isLoading: isDeleting, mutate: deleteBrand} = useMutation({
      mutationFn: deleteBrandApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['brands']
        })
      }
    });

    return { isDeleting, deleteBrand }
}