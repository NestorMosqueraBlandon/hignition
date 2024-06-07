import { getIssues } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useIssues = () => {
  const [searchParams] = useSearchParams();
  const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const project = !searchParams.get("project") ? "" : searchParams.get("project");

    const {isLoading, data: issues} = useQuery({
        queryKey: ['issues', page, project],
        queryFn: () => getIssues({page, project})
      });
    
    return { isLoading, issues }
}