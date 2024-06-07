import { getProjectById } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useProjectById = () => {
  const { projectId } = useParams();
    const {isLoading, data: project} = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProjectById(projectId ?? "")
      });
    
    return { isLoading, project }
}