import { getProjects } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useProjects = () => {

  const [searchParams] = useSearchParams();
  const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {isLoading, data: projects} = useQuery({
        queryKey: ['projects', page],
        queryFn: () => getProjects()
      });
    
    return { isLoading, projects }
}