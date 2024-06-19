"use client";

import React from "react";
import * as S from "./style";
import DummyPost from "src/asset/dummyPost.svg";
import Image from "next/image";
import usePost from "@/hooks/community/post/usePost";

interface Post {
  onclick: () => void;
  page: number;
}

const Post = ({ onclick, page }: Post) => {
  const { ...post } = usePost();
  const communityList = post.GetMyArticles(page);
  return (
    <>
      {communityList?.data.map((item, idx) => (
        <div onClick={() => post.handlePostId(item.id)}>
          <S.Post onClick={onclick} key={idx}>
            <Image src={DummyPost} alt="게시물 이미지" />
            <S.ContentWrap>
              <S.PostTtile>{item.title}</S.PostTtile>
              <S.PostContext>{item.content}</S.PostContext>
              <S.PostDate>{item.createdDateTime}</S.PostDate>
            </S.ContentWrap>
          </S.Post>
        </div>
      ))}
    </>
  );
};

export default Post;
