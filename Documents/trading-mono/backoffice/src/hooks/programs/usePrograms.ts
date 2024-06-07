import { getProgramsApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const usePrograms = () => {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: programs } = useQuery({
    queryKey: ["programs", page],
    queryFn: () => getProgramsApi({ page }),
  });

  return { isLoading, programs };
};
