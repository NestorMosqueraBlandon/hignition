import { getCollaborators } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useCollaborators = () => {

  const [searchParams] = useSearchParams();
  const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {isLoading, data: collaborators} = useQuery({
        queryKey: ['collaborators', page],
        queryFn: () => getCollaborators(100)
      });
    
    return { isLoading, collaborators }
}