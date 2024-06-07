import { updateProgramApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditProgram = () => {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editProgram } = useMutation({
    mutationFn: updateProgramApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["programs"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isEditing, editProgram };
};
