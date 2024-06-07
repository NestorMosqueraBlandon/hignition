import { deleteProject as deleteProjectApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteProject = () => {
    const queryClient = useQueryClient();
  
    const {isLoading: isDeleting, mutate: deleteProject} = useMutation({
      mutationFn: deleteProjectApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['projects']
        })
      }
    });

    return { isDeleting, deleteProject }
}