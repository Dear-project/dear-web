import React from "react";
import * as S from "../style";
import Profile from "src/asset/Profile.svg";
import Image from "next/image";
import usePost from "@/hooks/community/post/usePost";
import { useParams } from "next/navigation";

const Comment = () => {
  const { id } = useParams();
  const { getCommentById } = usePost();
  const commentList = getCommentById(Number(id));
  return (
    <S.CommentWrap>
      <S.Content style={{ fontSize: "28px", fontWeight: "600" }}>댓글</S.Content>
      <S.Comments>
        {commentList?.data.map((comment, idx) => (
          <S.Comment>
            <Image src={Profile} alt="프로필 이미지" /> {/* 서버의 response가 달리지면 사용자의 프로필 표시 */}
            <S.CommentContentWrap>
              <h1>{comment.commentor}</h1>
              <span>{comment.content}</span>
            </S.CommentContentWrap>
          </S.Comment>
        ))}
      </S.Comments>
    </S.CommentWrap>
  );
};

export default Comment;
