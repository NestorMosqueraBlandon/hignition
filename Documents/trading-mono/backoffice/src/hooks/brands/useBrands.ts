import { getBrands } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useBrands = () => {

  const [searchParams] = useSearchParams();
  const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {isLoading, data: brands} = useQuery({
        queryKey: ['brands', page],
        queryFn: () => getBrands({page})
      });
    
    return { isLoading, brands }
}