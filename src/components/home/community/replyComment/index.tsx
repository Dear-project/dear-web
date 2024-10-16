import React from "react";
import * as S from "../postDetail/style";
import Image from "next/image";
import MoreImg from "@/asset/MoreImg.svg";
import Profile from "@/asset/Profile.svg";
import usePost from "@/hooks/community/post/usePost";
import Send from "@/asset/send.svg";

interface ReplyComment {
  id: number;
  content: string;
  isOpen: boolean;
}

const ReplyComment = ({ id, content, isOpen }: ReplyComment) => {
  const { replyComent, handleReplyComment } = usePost();
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
          <Image src={Send} alt="보내기" width={24} height={24} />
        </div>
      )}

      <S.ReComment>
        <div>
          <Image src={Profile} alt="프로필 이미지" width={50} height={50} />
          <div>
            <h1>김가영</h1>
            <span>히히히히</span>
            <div>
              <span>2024.10.08. 오후 17:25</span>
              <span>답글 달기</span>
            </div>
          </div>
          <Image src={MoreImg} alt="더보기 " />
        </div>
      </S.ReComment>
    </>
  );
};

export default ReplyComment;
