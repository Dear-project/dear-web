import { useQuery} from "react-query";
import { AxiosError } from "axios";
import { ProfileType } from "../../types/profile/profileModel.types";
import ProfileRepositoryImpl from "../../repositories/profile/ProfileRepositoryImpl";
import { QUERY_KEYS } from "../QueryKey";


export const useGetProfileInfo = () => {
  const useGetprofile = useQuery<ProfileType, AxiosError<ProfileType>>({
    queryKey: [QUERY_KEYS.profile.getProfile],
    queryFn: async () => ProfileRepositoryImpl.getProfileInfo(),
    staleTime: 3600000, // 1시간
     refetchInterval: 3600000, // 1시간
  }
  
);
  return useGetprofile
};

