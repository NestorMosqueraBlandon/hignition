import { getComputersApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";

export const useComputers = () => {
  // const [searchParams] = useSearchParams();
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: computers } = useQuery({
    queryKey: ["computers"],
    queryFn: () => getComputersApi(),
  });

  return { isLoading, computers };
};
