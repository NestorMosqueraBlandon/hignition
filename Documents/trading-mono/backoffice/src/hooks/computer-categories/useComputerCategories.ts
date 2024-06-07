import { getComputerCategoriesApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useComputerCategories = () => {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: computerCategories } = useQuery({
    queryKey: ["computer-categories", page],
    queryFn: () => getComputerCategoriesApi({ page }),
  });

  return { isLoading, computerCategories };
};
