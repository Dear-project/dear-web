import { useMutation, useQueries } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import communityRepositoryImpl from "@/repositories/community/communityRepositoryImpl";
import { PostCommunityParams, PostImageParams, PutCommunityParams } from "@/repositories/community/communityRepository";

export const useAllGetCommunityQuery = (page: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.community.community],
      queryFn: () => communityRepositoryImpl.getAllCommunity(page),
      suspense: true,
    },
  ]);

export const useGetMyArticles = (page: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.community.getMyCommunity],
      queryFn: () => communityRepositoryImpl.getMyCommunity(page),
      suspense: true,
    },
  ]);

export const usePostCommunity = () => {
  const mutation = useMutation((params: PostCommunityParams) => communityRepositoryImpl.postCommunity(params));
  return mutation;
};

export const usePutCommunity = () => {
  const mutation = useMutation((params: PutCommunityParams) => communityRepositoryImpl.putCommunity(params));
  return mutation;
};

export const usePostMultiPart = () => {
  const mutation = useMutation((params: PostImageParams) => communityRepositoryImpl.postMultiPartCommunityById(params));
  return mutation;
};
