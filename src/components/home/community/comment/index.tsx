import React from "react";
import * as S from "../postDetail/style";
import Image from "next/image";
import MoreImg from "@/asset/MoreImg.svg";
import Profile from "@/asset/Profile.svg";
import { useGetCommentById } from "@/queries/community/comment/comment.query";

const Comment = ({ id }: { id: number }) => {
  const { data: commentList } = useGetCommentById(id);

  return (
    <S.CommentWrap>
      <S.CommentWrapTitle>댓글</S.CommentWrapTitle>
      <S.CommentContentWrap>
        <S.Comment>
          {/* <div>
            <Image src={Profile} alt="프로필" width={50} height={50} />
            <div>
              <h1>김가영</h1>
              <span>제가 알려드리겠습니다~ 시급 10만원!</span>
              <div>
                <span>2024.10.08. 오후 17:25</span>
                <span>답글 달기</span>
              </div>
            </div>
          </div> */}
          {Array.isArray(commentList?.data) &&
            commentList?.data.map((comment) => (
              <div key={comment.commentId}>
                <Image src={Profile} alt="프로필 이미지" width={50} height={50} />
                <div>
                    <h1>{comment.commentor}</h1>
                    <span>{comment.content}</span>
                    <div>
                        <span></span>
                    </div>
                </div>
              </div>
            ))}
          <Image src={MoreImg} alt="더보기" />
        </S.Comment>
      </S.CommentContentWrap>
    </S.CommentWrap>
  );
};

export default Comment;
