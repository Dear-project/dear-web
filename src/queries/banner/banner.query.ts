import { useQueries } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import bannerRepositoryImpl from "../../repositories/banner/bannerRepositoryImpl";
export const useGetAllBanner = () =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.banner.getAllbanner],
      queryFn: () => bannerRepositoryImpl.getAllbanner(),
      suspense: true,
    },
  ]);
