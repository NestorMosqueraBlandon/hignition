import { createIssueApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateIssue = () => {
    const queryClient = useQueryClient();

    const {isLoading: isCreating, mutate: createIssue} = useMutation({
        mutationFn: createIssueApi,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['issues']
          })
          queryClient.invalidateQueries({
            queryKey: ['issues-by-project']
          })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createIssue }
}