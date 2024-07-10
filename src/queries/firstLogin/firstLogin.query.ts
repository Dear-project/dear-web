import {
  GetListParams,
  GetMajorListParams,
  PostMajorParams,
  PostSchoolParams,
  getMajorParams,
} from "@/repositories/firstLogin/firstLoginRepository";
import { useMutation } from "react-query";
import firstLoginRepositoryImpl from "@/repositories/firstLogin/firstLoginRepositoryImpl";

export const usePostSchool = () => {
  const mutation = useMutation((registerSchoolBody: PostSchoolParams) =>
    firstLoginRepositoryImpl.postSchool(registerSchoolBody),
  );
  return mutation;
};

export const usePostMajor = () => {
  const mutation = useMutation((registerMajorBody: PostMajorParams) =>
    firstLoginRepositoryImpl.postMajor(registerMajorBody),
  );
  return mutation;
};

export const useGetSchoolList = () => {
  const muation = useMutation((schoolListParams: GetListParams) =>
    firstLoginRepositoryImpl.getSchoolList(schoolListParams),
  );
  return muation;
};

export const useGetMajorList = () => {
  const mutation = useMutation((majorListParams: GetMajorListParams) =>
    firstLoginRepositoryImpl.getMajorList(majorListParams),
  );
  return mutation;
};

export const useGetMajorBySubject = () => {
  const muation = useMutation((majorBySubjectParams: getMajorParams) =>
    firstLoginRepositoryImpl.getMajorbySubject(majorBySubjectParams),
  );
  return muation;
};
