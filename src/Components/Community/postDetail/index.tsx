"use client";
import React from "react";
import * as S from "./style";
import Sidebar from "@/components/Sidebar/index";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";
import PostImage from "src/asset/1712314839.016066DSC00131.jpeg";
import Comment from "./comment";

const PostDetail = () => {
  return (
    <S.PostDetail>
      <Sidebar />
      <S.Main>
        <S.WriterInfo>
          <Image src={Profile} alt="프로필 이미지" />
          <div>
            <h1>김가영</h1>
            <span>2024년 5월 2일(목) 05:45</span>
          </div>
        </S.WriterInfo>
        <S.Content>바인드 부장 김가영입니다,</S.Content>
        <Image src={PostImage} alt="게시물 이미지" style={{ width: "400px", height: "400px" }} />
        <S.Content>우리 8기 바인드 입니다.</S.Content>
        <Comment />
      </S.Main>
    </S.PostDetail>
  );
};

export default PostDetail;
