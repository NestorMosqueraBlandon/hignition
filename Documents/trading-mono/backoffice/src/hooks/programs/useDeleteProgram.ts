import { deleteProgramApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteProgram = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProgram } = useMutation({
    mutationFn: deleteProgramApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["programs"],
      });
    },
  });

  return { isDeleting, deleteProgram };
};
