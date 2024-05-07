"use client";
import React from "react";
import * as S from "./style";
import Sidebar from "src/Components/Sidebar/index";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";

const PostDetail = () => {
  return (
    <S.PostDetail>
      <Sidebar />
      <S.Main>
        <S.WriterInfo>
          <Image src={Profile} alt="프로필 이미지" />
        </S.WriterInfo>
      </S.Main>
    </S.PostDetail>
  );
};

export default PostDetail;
