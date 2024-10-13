import { UseQueryOptions, UseQueryResult, useMutation, useQueries, useQuery } from "react-query";
import { CommentParams } from "../../../repositories/community/comment/commentRepository";
import { QUERY_KEYS } from "../../QueryKey";
import commentRepositoryImpl from "../../../repositories/community/comment/commentRepositoryImpl";
import { CommentByIdResponse } from "@/types/community/comment/comment.types";
import { AxiosError } from "axios";

export const usePostComment = () => {
  const mutation = useMutation((commentParams: CommentParams) => commentRepositoryImpl.postComment(commentParams));
  return mutation;
};

export const usePostSubComoment = () => {
  const mutation = useMutation((commentParams: CommentParams) => commentRepositoryImpl.postSubComment(commentParams));
  return mutation;
};

export const useGetCommentById = (
  idParams: number,
  options?: UseQueryOptions<CommentByIdResponse, AxiosError, CommentByIdResponse, string>,
): UseQueryResult<CommentByIdResponse, AxiosError> =>
  useQuery(QUERY_KEYS.community.comment.comment, () => commentRepositoryImpl.getCommentById(idParams), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useDeleteComoment = () => {
  const mutation = useMutation((idParams: number) => commentRepositoryImpl.deleteComment(idParams));
  return mutation;
};

export const useDeleteSubComoment = () => {
  const mutation = useMutation((idParams: number) => commentRepositoryImpl.deleteSubComment(idParams));
  return mutation;
};
