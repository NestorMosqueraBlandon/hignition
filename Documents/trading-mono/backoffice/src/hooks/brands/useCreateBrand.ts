import { createBrand as createBrandApi} from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateBrand = () => {
    const queryClient = useQueryClient();

    const {isLoading: isCreating, mutate: createBrand} = useMutation({
        mutationFn: createBrandApi,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['brands']
          })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createBrand}
}