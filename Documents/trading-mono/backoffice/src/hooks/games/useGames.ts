import { getGamesApi } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGames = () => {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: games } = useQuery({
    queryKey: ["games", page],
    queryFn: () => getGamesApi({ page }),
  });

  return { isLoading, games };
};
