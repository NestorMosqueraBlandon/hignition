import { editBrandApi} from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditBrand = () => {
    const queryClient = useQueryClient();

    const {isLoading: isEditing, mutate: editBrand} = useMutation({
        mutationFn: editBrandApi,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['brands']
          })
        },
        onError: (err) => console.log(err)
    });

    return { isEditing, editBrand}
}