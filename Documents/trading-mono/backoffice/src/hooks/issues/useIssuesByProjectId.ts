import { getIssuesByProjectId } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useIssuesByProjectId = () => {
  const [searchParams] = useSearchParams();

  const project = !searchParams.get("project") ? "" : searchParams.get("project");

  const {isLoading, data: issues} = useQuery({
        queryKey: ['issues-by-project', project],
        queryFn: () => getIssuesByProjectId(project ?? "")
      });
    
    return { isLoading, issues }
}