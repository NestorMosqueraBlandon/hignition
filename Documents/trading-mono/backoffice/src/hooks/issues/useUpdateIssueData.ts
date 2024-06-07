import { updateIssueApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateIssueData = () => {
    const queryClient = useQueryClient();
  
    const {isLoading: isCreating, mutate: updateIssue} = useMutation({
        mutationFn: updateIssueApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['issue']
            })
            queryClient.invalidateQueries({
              queryKey: ['issues']
            })
          },
        onError: (err) => {
            console.log(err)
          },
    });

    return { isCreating, updateIssue}
}