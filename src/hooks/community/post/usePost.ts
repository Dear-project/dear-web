import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import { usePostCommunity } from "@/queries/community/community.query";
import axios, { Axios, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  useDeleteComoment,
  useDeleteSubComoment,
  usePostComment,
  usePostSubComoment,
} from "@/queries/community/comment/comment.query";
import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";
import { ProfessorCheck } from "@/store/profile/profile.store";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);
  const [comment, setComment] = useState<string>("");
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [replyComent, setReplyComment] = useState<string>("");

  const postCommunitymutation = usePostCommunity();
  const postCommentMutation = usePostComment();

  const isProfessor = useRecoilValue(ProfessorCheck);

  const handleReplyCommentIsOpen = (commentId: number) => {
    setIsOpen(isOpen === commentId ? null : commentId);
  };

  const [isRequesting, setIsRequesting] = useState(false);

  const setWrite = () => {
    if (isRequesting) return; // 요청 중이면 아무 것도 하지 않음
    setIsRequesting(true);

    postCommunitymutation.mutate(undefined, {
      onSuccess: (res) => {
        setWritetId(res.data.id);
        router.push(isProfessor ? "/community/professor/write" : "/community/write");
      },
      onError: (error) => {
        dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
        setIsRequesting(false); // 오류 발생 시 상태 초기화
      },
    });
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsRequesting(false); // 페이지 이동 시 요청 초기화
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
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
          dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
        },
      },
    );
  };

  const postReplyCommentMutation = usePostSubComoment();
  const postReplyComment = (id: number, content: string) => {
    postReplyCommentMutation.mutate(
      {
        id,
        content,
      },
      {
        onSuccess: () => {
          dearToast.sucessToast("대댓글이 등록되었습니다.");
          queryClient.invalidateQueries("comment");
        },
        onError: (error) => {
          dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
        },
      },
    );
  };

  const deleteCommentMutation = useDeleteComoment();
  const deleteComment = (id: number) => {
    Swal.fire({
      title: "정말 댓글을 삭제하시겠습니끼?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCommentMutation.mutate(id, {
          onSuccess: () => {
            dearToast.sucessToast("댓글 삭제 성공");
            queryClient.invalidateQueries("comment");
          },
          onError: (error) => {
            dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
          },
        });
      }
    });
  };

  const deleteReplyCommentMutation = useDeleteSubComoment();
  const deleteReplyComment = (id: number) => {
    Swal.fire({
      title: "정말 댓글을 삭제하시겠습니끼?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReplyCommentMutation.mutate(id, {
          onSuccess: () => {
            dearToast.sucessToast("댓글 삭제 성공");
            queryClient.invalidateQueries("comment");
          },
          onError: (error) => {
            ErrorTransform((error as AxiosError).status!);
          },
        });
      }
    });
  };

  return {
    writeId,
    comment,
    isOpen,
    replyComent,
    setWrite,
    handleComment,
    postComment,
    handleReplyComment,
    postReplyComment,
    deleteComment,
    deleteReplyComment,
    handleReplyCommentIsOpen,
  };
};

export default usePost;
