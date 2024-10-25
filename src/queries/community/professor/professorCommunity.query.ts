import { QUERY_KEYS } from "@/queries/QueryKey";
import { PatchCommunityParams, PostImageParams } from "@/repositories/community/communityRepository";
import professorCommunityRepositoryImpl from "@/repositories/community/professor/professorCommunityRepositoryImpl";
import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
} from "@/types/community/post/post.types";
import { AxiosError } from "axios";
import { UseQueryOptions, UseQueryResult, useMutation, useQuery } from "react-query";

export const useAllGetProfessorCommunityQuery = (
  page: number,
  options?: UseQueryOptions<CommunityDataResponse, AxiosError, CommunityDataResponse, string>,
): UseQueryResult<CommunityDataResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.professor.community, () => professorCommunityRepositoryImpl.getAllCommunity(page), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetMyProfessorArticles = (
  page: number,
  options?: UseQueryOptions<CommunityPostArticlesResponse, AxiosError, CommunityPostArticlesResponse, string>,
): UseQueryResult<CommunityPostArticlesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.professor.getMyCommunity, () => professorCommunityRepositoryImpl.getMyCommunity(page), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetProfessorCommunityById = (
  id: number,
  options?: UseQueryOptions<CommunityDataByIdResponse, AxiosError, CommunityDataByIdResponse, string>,
): UseQueryResult<CommunityDataByIdResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.professor.community, () => professorCommunityRepositoryImpl.getCommunityById(id), {
    ...options,
  });

export const usePostProfessorCommunity = () => {
  const mutation = useMutation(() => professorCommunityRepositoryImpl.postCommunity());
  return mutation;
};

export const usePatchProfessorCommunity = () => {
  const mutation = useMutation((params: PatchCommunityParams) =>
    professorCommunityRepositoryImpl.patchCommunity(params),
  );
  return mutation;
};

export const usePostProfessorMultiPart = () => {
  const mutation = useMutation((params: PostImageParams) =>
    professorCommunityRepositoryImpl.postMultiPartCommunityById(params),
  );
  return mutation;
};
