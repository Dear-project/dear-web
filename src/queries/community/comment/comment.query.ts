import { useMutation, useQueries } from "react-query";
import { CommentParams } from "../../../repositories/community/comment/commentRepository";
import { QUERY_KEYS } from "../../QueryKey";
import commentRepositoryImpl from "../../../repositories/community/comment/commentRepositoryImpl";

export const usePostComment = () => {
  const mutation = useMutation((commentParams: CommentParams) => commentRepositoryImpl.postComment(commentParams));
  return mutation;
};

export const usePostSubComoment = () => {
  const mutation = useMutation((commentParams: CommentParams) => commentRepositoryImpl.postSubComment(commentParams));
  return mutation;
};

export const usegetCommentById = (idParams: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.community.comment.comment],
      queryFn: () => commentRepositoryImpl.getCommentById(idParams),
      suspense: true,
    },
  ]);

export const useDeleteComoment = () => {
  const mutation = useMutation((idParams: number) => commentRepositoryImpl.deleteComment(idParams));
  return mutation;
};

export const useDeleteSubComoment = () => {
  const mutation = useMutation((idParams: number) => commentRepositoryImpl.deleteSubComment(idParams));
  return mutation;
};
