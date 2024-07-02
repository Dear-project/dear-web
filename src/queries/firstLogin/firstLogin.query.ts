import { GetListParams, PostMajorParams, PostSchoolParams } from "../../repositories/firstLogin/firstLoginRepository";
import { useMutation, useQueries, useQuery } from "react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../QueryKey";
import firstLoginRepositoryImpl from "../../repositories/firstLogin/firstLoginRepositoryImpl";
import { GetSchoolListRespose } from "../../types/firstLogin/firstLogin.types";

export const usePostSchool = () => {
  const mutation = useMutation((params: PostSchoolParams) => firstLoginRepositoryImpl.postSchool(params));
  return mutation;
};

export const usepostMajor = () => {
  const mutation = useMutation((params: PostMajorParams) => firstLoginRepositoryImpl.postMajor(params));
  return mutation;
};

// export const useGetSchoolList = (params: GetListParams) =>
//   useQueries([
//     {
//       queryKey: [QUERY_KEYS.school.getSchoolList],
//       queryFn: () => firstLoginRepositoryImpl.getSchoolList(params),
//       suspense: true,
//     },
//   ]);

export const useGetSchoolList = (params: GetListParams) => {
  const { data: schoolList } = useQuery({
    queryKey: [QUERY_KEYS.school.getSchoolList],
    queryFn: () => firstLoginRepositoryImpl.getSchoolList(params),
  });
  return schoolList;
};

export const useGetMajorList = (params: GetListParams) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.school.getlMajorList],
      queryFn: () => firstLoginRepositoryImpl.getMajorList(params),
      suspense: true,
    },
  ]);
