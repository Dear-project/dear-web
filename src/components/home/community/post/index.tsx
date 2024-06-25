"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import usePost from "@/hooks/community/post/usePost";
import { useRouter } from "next/navigation";
import { convertDate } from "@/utils/transform/date/convertDate";

interface Post {
  page: number;
}

const Post = ({ page }: Post) => {
  const { ...post } = usePost();
  const router = useRouter();
  const communityList = post.getAllCommunity(page);
  console.log(communityList);
  return (
    <>
      {communityList?.data !== null &&
        communityList?.data !== undefined &&
        communityList?.data.length! > 0 &&
        communityList?.data.map((item, idx) => (
          <div onClick={() => router.push(`/community/${item.id}`)}>
            <S.Post key={idx}>
              <Image src={item.imgPath} alt="게시물 이미지" />
              <S.ContentWrap>
                <S.PostTtile>{item.title}</S.PostTtile>
                <S.PostContext>{item.content}</S.PostContext>
                <S.PostDate>{convertDate(item.modifiedDateTime!!)}</S.PostDate>
              </S.ContentWrap>
            </S.Post>
          </div>
        ))}
    </>
  );
};

export default Post;
