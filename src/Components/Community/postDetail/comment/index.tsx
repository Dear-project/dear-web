import React from "react";
import * as S from "../style";
import Profile from "src/asset/Profile.svg";
import Image from "next/image";

const Comment = () => {
  return (
    <S.CommentWrap>
      <S.Content>댓글</S.Content>
      <S.Comments>
        <S.Comment>
          <Image src={Profile} alt="프로필 이미지" />
          <S.CommentContentWrap>
            <h1>신민호</h1>
            <span>바인드 맛있네요.</span>
          </S.CommentContentWrap>
        </S.Comment>
        <S.Comment>
          <Image src={Profile} alt="프로필 이미지" />
          <S.CommentContentWrap>
            <h1>신민호</h1>
            <span>바인드 맛있네요.</span>
          </S.CommentContentWrap>
        </S.Comment>
        <S.Comment>
          <Image src={Profile} alt="프로필 이미지" />
          <S.CommentContentWrap>
            <h1>신민호</h1>
            <span>바인드 맛있네요.</span>
          </S.CommentContentWrap>
        </S.Comment>
        <S.Comment>
          <Image src={Profile} alt="프로필 이미지" />
          <S.CommentContentWrap>
            <h1>신민호</h1>
            <span>바인드 맛있네요.</span>
          </S.CommentContentWrap>
        </S.Comment>
        <S.Comment>
          <Image src={Profile} alt="프로필 이미지" />
          <S.CommentContentWrap>
            <h1>신민호</h1>
            <span>바인드 맛있네요.</span>
          </S.CommentContentWrap>
        </S.Comment>
      </S.Comments>
    </S.CommentWrap>
  );
};

export default Comment;
