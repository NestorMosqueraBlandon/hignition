import { createProgramApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProgram = () => {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createProgram } = useMutation({
    mutationFn: createProgramApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["programs"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createProgram };
};
