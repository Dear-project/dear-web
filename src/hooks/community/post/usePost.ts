import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import {
  useAllGetCommunityQuery,
  useGetCommunityById,
  useGetMyArticles,
  usePostCommunity,
} from "@/queries/community/community.query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useGetCommentById, usePostComment } from "@/queries/community/comment/comment.query";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@/queries/QueryKey";
import { CommentById } from "@/types/community/comment/comment.types";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);
  const [comment, setComment] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [replyComent, setReplyComment] = useState<string>("");

  const postCommunitymutation = usePostCommunity();
  const postCommentMutation = usePostComment();

  const setWrite = () => {
    postCommunitymutation.mutate(undefined, {
      onSuccess: (res) => {
        setWritetId(res.data.id);
        router.push("/community/write");
      },
      onError: (error) => {
        const errorResponse = error as AxiosError;
        dearToast.errorToast(errorResponse.message);
      },
    });
  };

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleReplyCommentInputOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleReplyComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyComment(e.target.value);
  };

  const queryClient = useQueryClient();
  const postComment = (content: string, id: number) => {
    postCommentMutation.mutate(
      {
        content,
        id,
      },
      {
        onSuccess: (data) => {
          dearToast.sucessToast("댓글이 등록되었습니다.");
          queryClient.invalidateQueries("comment");
        },
        onError: (error) => {
          dearToast.errorToast((error as AxiosError).message);
        },
      },
    );
  };

  return {
    writeId,
    comment,
    isOpen,
    replyComent,
    setWrite,
    handleComment,
    postComment,
    handleReplyCommentInputOpen,
    handleReplyComment,
  };
};

export default usePost;
