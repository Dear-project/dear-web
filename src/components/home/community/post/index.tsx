"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import usePost from "@/hooks/community/post/usePost";
import DefaultPostImg from "@/asset/DefaultPostImg.svg";
import { useRouter } from "next/navigation";
import { convertDate } from "@/utils/transform/date/convertDate";

interface Post {
  page: number;
}

const Post = ({ page }: Post) => {
  const { ...post } = usePost();
  const router = useRouter();
  const communityList = post.getAllCommunity(page);

  return (
    <>
      {communityList?.data !== null &&
        communityList?.data !== undefined &&
        communityList?.data.length! > 0 &&
        communityList?.data.map((item, idx) => (
          <S.Post key={idx} onClick={() => router.push(`/community/${item.id}`)}>
            {item.imagePath && !item.imagePath.endsWith(".pdf") ? (
              <Image src={item.imagePath} alt="게시물 이미지" width={130} height={130} />
            ) : (
              <Image src={DefaultPostImg} alt="게시물 이미지" width={130} height={130} />
            )}
            <S.ContentWrap>
              <S.PostTtile>{item.title}</S.PostTtile>
              <S.PostContext>{item.content}</S.PostContext>
              <S.PostDate>{convertDate(item.modifiedDateTime!!)}</S.PostDate>
            </S.ContentWrap>
          </S.Post>
        ))}
    </>
  );
};

export default Post;
