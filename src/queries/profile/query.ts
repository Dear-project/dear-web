import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { ProfileType } from "../../types/profile/profile.type";
import ProfileRepositoryImpl from "../../repositories/profile/ProfileRepositoryImpl";
import { QUERY_KEYS } from "../QueryKey";
import {
  PassswrodChangeParams,
  ImageChangeParams,
  EditSchoolAndMajorParams,
} from "@/repositories/profile/ProfileRepository";

export const useGetProfileInfo = () => {
  const useGetprofile = useQuery<ProfileType, AxiosError<ProfileType>>({
    queryKey: [QUERY_KEYS.profile.getProfile],
    queryFn: async () => ProfileRepositoryImpl.getProfileInfo(),
    staleTime: 3600000, // 1시간
    refetchInterval: 3600000, // 1시간
  });
  return useGetprofile;
};

export const usePatchPassword = () => {
  const mutation = useMutation((passwordParams: PassswrodChangeParams) =>
    ProfileRepositoryImpl.patchPassword(passwordParams),
  );
  return mutation;
};

export const usePostProfileImage = () => {
  const mutation = useMutation((imageChangeParams: ImageChangeParams) =>
    ProfileRepositoryImpl.postProfileImage(imageChangeParams),
  );
  return mutation;
};

export const usePostEditSchoolAndMajor = () => {
  const mutation = useMutation((editSchoolAndMajorParams: EditSchoolAndMajorParams) =>
    ProfileRepositoryImpl.postEditSchoolAndMajor(editSchoolAndMajorParams),
  );
  return mutation;
};
