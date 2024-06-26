import { GetListParams, PostMajorParams, PostSchoolParams } from "../../repositories/firstLogin/firstLoginRepository";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../QueryKey";
import firstLoginRepositoryImpl from "../../repositories/firstLogin/firstLoginRepositoryImpl";
import { GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";

export const usePostSchool = (params: PostSchoolParams) => {
  const mutation = useMutation(() => firstLoginRepositoryImpl.postSchool(params));
  return mutation;
};

export const usepostMajor = (params: PostMajorParams) => {
  const mutation = useMutation(() => firstLoginRepositoryImpl.postMajor(params));
  return mutation;
};

export const useGetList = (params: GetListParams) => {
  const useGetSchoolList = useQuery<GetSchoolListRespose, AxiosError<GetSchoolListRespose>>({
    queryKey: [QUERY_KEYS.school.getSchoolList],
    queryFn: async () => firstLoginRepositoryImpl.getSchoolList(params),
    staleTime: 3600000,
    refetchInterval: 3600000,
  });

  const useGetMajorList = useQuery<GetSchoolListRespose, AxiosError<GetSchoolListRespose>>({
    queryKey: [QUERY_KEYS.school.getlMajorList],
    queryFn: async () => firstLoginRepositoryImpl.getMajorList(params),
    staleTime: 3600000,
    refetchInterval: 3600000,
  });

  return { useGetSchoolList, useGetMajorList };
};
