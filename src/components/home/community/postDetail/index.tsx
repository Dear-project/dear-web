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
        <S.WriterInfo>
          <Image src={Profile} alt="" />
          <div>
            <h1>{communityData?.data.userId}</h1>
            <span>{communityData?.data.createdDateTime}</span>
          </div>
        </S.WriterInfo>
        <S.Content>{communityData?.data.title}</S.Content>
        {communityData?.data.imagePathList !== null && communityData?.data.imagePathList !== undefined && (
          <Image src={communityData.data.imagePathList[0]} alt="" width={500} height={300} />
        )}

        <S.Content>{communityData?.data.content}</S.Content>
        <Comment />
      </S.Main>
    </S.PostDetail>
  );
};

export default PostDetail;
