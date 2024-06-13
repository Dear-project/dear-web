import { useQueries } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import communityRepositoryImpl from "@/repositories/community/communityRepositoryImpl";

export const useAllGetCommunityQuery = (page: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.community.community],
      queryFn: () => communityRepositoryImpl.getAllCommunity(page),
      suspense: true,
    },
  ]);
