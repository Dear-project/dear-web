"use client";

import React from "react";
import * as S from "./style";
import DummyPost from "src/asset/dummyPost.svg";
import Image from "next/image";

interface Post {
  onclick: (() => void) | string;
}

const Post: React.FC<Post> = ({ onclick }) => {
  return (
    <S.Post
      onClick={() => {
        if (typeof onclick === "function") {
          onclick();
        }
      }}
    >
      <Image src={DummyPost} alt="게시물 이미지" />
      <S.ContentWrap>
        <S.PostTtile>툰게더</S.PostTtile>
        <S.PostContext>툰게더를 만들고 어쩌고 저쩌고 대충 PROGRESS 화이팅...!</S.PostContext>
      </S.ContentWrap>
    </S.Post>
  );
};

export default Post;
