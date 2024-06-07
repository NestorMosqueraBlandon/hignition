import { createComputerApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateComputer = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createComputer } = useMutation({
    mutationFn: createComputerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["computers"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createComputer };
};
