import { getProductsApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";

export const useProducts = () => {
  // const [searchParams] = useSearchParams();
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsApi(),
  });

  return { isLoading, products };
};
