import {
  GetListParams,
  GetMajorListParams,
  PostMajorParams,
  PostSchoolParams,
  getMajorParams,
} from "../../repositories/firstLogin/firstLoginRepository";
import { useMutation } from "react-query";
import firstLoginRepositoryImpl from "../../repositories/firstLogin/firstLoginRepositoryImpl";

export const usePostSchool = () => {
  const mutation = useMutation((params: PostSchoolParams) => firstLoginRepositoryImpl.postSchool(params));
  return mutation;
};

export const usePostMajor = () => {
  const mutation = useMutation((params: PostMajorParams) => firstLoginRepositoryImpl.postMajor(params));
  return mutation;
};

export const useGetSchoolList = () => {
  const muation = useMutation((params: GetListParams) => firstLoginRepositoryImpl.getSchoolList(params));
  return muation;
};

export const useGetMajorList = () => {
  const mutation = useMutation((params: GetMajorListParams) => firstLoginRepositoryImpl.getMajorList(params));
  return mutation;
};

export const useGetMajorBySubject = () => {
  const muation = useMutation((params: getMajorParams) => firstLoginRepositoryImpl.getMajorbySubject(params));
  return muation;
};
