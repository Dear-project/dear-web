import React from "react";
import * as S from "../postDetail/style";
import Image from "next/image";
import MoreImg from "@/asset/MoreImg.svg";
import Profile from "@/asset/Profile.svg";
import usePost from "@/hooks/community/post/usePost";
import Send from "@/asset/send.svg";
import { SubComment } from "@/types/community/comment/comment.types";

interface ReplyComment {
  id: number;
  isOpen: boolean;
  subComment: SubComment[];
}

const ReplyComment = ({ id, isOpen, subComment }: ReplyComment) => {
  const { replyComent, handleReplyComment, postReplyComment } = usePost();
  return (
    <>
      {isOpen && (
        <div
          style={{
            display: "flex",
            width: "calc(100% - 120px)",
            height: "calc(10% - 20px)",
            padding: "10px 30px",
            justifyContent: "space-between",
            alignSelf: "flex-end",
          }}
        >
          <input value={replyComent} onChange={handleReplyComment} placeholder="대댓글을 입력해주세요." />
          <Image src={Send} alt="보내기" width={24} height={24} onClick={() => postReplyComment(id, replyComent)} />
        </div>
      )}
      {subComment.map((subComment) => (
        <S.ReComment>
          <div key={subComment.commentId}>
            <Image src={Profile} alt="프로필 이미지" width={50} height={50} />
            <div>
              <h1>{subComment.commentor}</h1>
              <span>{subComment.content}</span>
              <div>
                <span>2024.10.08. 오후 17:25</span>
              </div>
            </div>
            <Image src={MoreImg} alt="더보기 " />
          </div>
        </S.ReComment>
      ))}
    </>
  );
};

export default ReplyComment;
