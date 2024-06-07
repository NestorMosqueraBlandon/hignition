import { deleteComputerApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteComputer = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteComputer } = useMutation({
    mutationFn: deleteComputerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["programs"],
      });
    },
  });

  return { isDeleting, deleteComputer };
};
