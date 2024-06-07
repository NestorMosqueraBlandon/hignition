import { createProjectApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProject = () => {
    const queryClient = useQueryClient();

    const {isLoading: isCreating, mutate: createProject} = useMutation({
        mutationFn: createProjectApi,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['projects']
          })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createProject}
}