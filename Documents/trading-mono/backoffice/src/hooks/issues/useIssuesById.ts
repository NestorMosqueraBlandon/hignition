import { getIssueById } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useIssueById = () => {
  const { issueId } = useParams();
    const {isLoading, data: issue} = useQuery({
        queryKey: ['issue', issueId],
        queryFn: () => getIssueById(issueId ?? "")
      });
    
    return { isLoading, issue }
}