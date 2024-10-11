import { UseQueryOptions, UseQueryResult, useMutation, useQueries, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import communityRepositoryImpl from "@/repositories/community/communityRepositoryImpl";
import { PostImageParams, PatchCommunityParams } from "@/repositories/community/communityRepository";
import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
} from "@/types/community/post/post.types";
import { AxiosError } from "axios";

export const useAllGetCommunityQuery = (
  page: number,
  options?: UseQueryOptions<CommunityDataResponse, AxiosError, CommunityDataResponse, string>,
): UseQueryResult<CommunityDataResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.community, () => communityRepositoryImpl.getAllCommunity(page), { ...options });
export const useGetMyArticles = (
  page: number,
  options?: UseQueryOptions<CommunityPostArticlesResponse, AxiosError, CommunityPostArticlesResponse, string>,
): UseQueryResult<CommunityPostArticlesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.getMyCommunity, () => communityRepositoryImpl.getMyCommunity(page), { ...options });

export const useGetCommunityById = (
  id: number,
  options?: UseQueryOptions<CommunityDataByIdResponse, AxiosError, CommunityDataByIdResponse, string>,
): UseQueryResult<CommunityDataByIdResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.community, () => communityRepositoryImpl.getCommunityById(id), { ...options });

export const usePostCommunity = () => {
  const mutation = useMutation(() => communityRepositoryImpl.postCommunity());
  return mutation;
};

export const usePatchCommunity = () => {
  const mutation = useMutation((params: PatchCommunityParams) => communityRepositoryImpl.patchCommunity(params));
  return mutation;
};

export const usePostMultiPart = () => {
  const mutation = useMutation((params: PostImageParams) => communityRepositoryImpl.postMultiPartCommunityById(params));
  return mutation;
};
