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

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);
  const [comment, setComment] = useState<string>("");

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

  const postComment = (content: string, id: number) => {
    postCommentMutation.mutate(
      {
        content,
        id,
      },
      {
        onSuccess: () => {
          dearToast.sucessToast("댓글이 등록되었습니다.");
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
    setWrite,
    handleComment,
    postComment,
  };
};

export default usePost;
