import { updateIssueApi } from "@/services";
import { Issue, Result } from "@rv/entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useUpdateIssue = () => {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();
    const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
    const project = !searchParams.get("project") ? "" : searchParams.get("project");
  
    const {isLoading: isCreating, mutate: updateIssue} = useMutation({
        mutationFn: updateIssueApi,
        onMutate: async (card) => {
            await queryClient.cancelQueries(['issues', page, project]);
            await queryClient.cancelQueries(['issues-by-project', project]);
            
            const data = queryClient.getQueryData<Result<Issue>>(['issues', page, project])
            if(!data) return;

            const newCards = data.items.map((item:any) => {
                return item.uuid === card.uuid ? card : item
            })

            const newPreviousData: Result<Issue> = {
                ...data,
                items: newCards
            }

            queryClient.setQueryData(["issues", page, project], newPreviousData);
            queryClient.setQueryData(["issues-by-project", project], newPreviousData);

         
            return { data: newPreviousData }
        },
        onError: (__, _, context) => {
            if (context?.data) {
              queryClient.setQueryData(
                ["issues"],
                context.data
              );
            }
          },
        onSettled: () => {
          queryClient.invalidateQueries(['issues'])
          queryClient.invalidateQueries(['issues-by-project'])
        },
    });

    return { isCreating, updateIssue}
}