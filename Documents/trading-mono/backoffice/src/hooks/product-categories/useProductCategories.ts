import { getProductCategoriesApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useProductCategories = () => {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: productCategories } = useQuery({
    queryKey: ["product-categories", page],
    queryFn: () => getProductCategoriesApi({ page }),
  });

  return { isLoading, productCategories };
};
