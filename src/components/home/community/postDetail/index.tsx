"use client";
import React, { useEffect } from "react";
import * as S from "./style";
import Sidebar from "@/components/common/sidebar/index";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";
import PostImage from "src/asset/1712314839.016066DSC00131.jpeg";
import Comment from "./comment/index";
import { useParams } from "next/navigation";
import usePost from "@/hooks/community/post/usePost";

const PostDetail = () => {
  const { id } = useParams();
  const { getCommunityById } = usePost();
  const communityData = getCommunityById(Number(id));
  console.log(communityData);

  return (
    <S.PostDetail>
      <S.Main>
        {/* {communityData?.data.map((item, idx) => (
          <>
            <S.WriterInfo key={idx}>
              <Image src={Profile} alt="프로필 이미지" />
              <div>
                <h1>{item.userId}</h1>
                <span>{item.createdDateTime}</span>
              </div>
            </S.WriterInfo>
            <S.Content>{item.title}</S.Content>
            <Image src={item.imagePathList[idx]} alt="" />
            <S.Content>{item.content}</S.Content>
          </>
        ))} */}
        {/* {communityData?.data.map((item, idx) => (
          <>
            <S.WriterInfo key={idx}>
              <Image src={Profile} alt="" />
              <div>
                <h1>{item.userId}</h1>
                <span>{item.userId}</span>
              </div>
            </S.WriterInfo>
            <S.Content>{item.title}</S.Content>
            <Image src={item.imagePathList[idx]} alt="" />
            <S.Content>{item.content}</S.Content>
          </>
        ))} */}
        <Comment />
      </S.Main>
    </S.PostDetail>
  );
};

export default PostDetail;
