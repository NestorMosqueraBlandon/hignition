import { deleteIssueApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteIssue = () => {
    const queryClient = useQueryClient();
  
    const {isLoading: isDeleting, mutate: deleteIssue} = useMutation({
      mutationFn: deleteIssueApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['issues']
        })
        queryClient.invalidateQueries({
          queryKey: ['issues-by-project']
        })
      }
    });

    return { isDeleting, deleteIssue }
}