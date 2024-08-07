"use client";
import React, { useEffect } from "react";
import * as S from "./style";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";
import Comment from "./comment/index";
import { useParams } from "next/navigation";
import usePost from "@/hooks/community/post/usePost";
import { convertDate } from "@/utils/transform/date/convertDate";

const PostDetail = () => {
  const { id } = useParams();
  const { getCommunityById } = usePost();
  const communityData = getCommunityById(Number(id));
  console.log(communityData);

  return (
    <S.PostDetail>
      <S.Main>
        <S.WriterInfo>
          {communityData?.data.profileImage !== null && communityData?.data.profileImage !== undefined ? (
            <Image src={communityData.data.profileImage} alt="프로필 이미지" width={100} height={100} />
          ) : (
            <Image src={Profile} alt="프로필 이미지" />
          )}
          <div>
            <h1>{communityData?.data.userName}</h1>
            <span>{convertDate(communityData?.data.modifiedDateTime!!)}</span>
          </div>
        </S.WriterInfo>
        <S.Content>{communityData?.data.title}</S.Content>
        {communityData?.data.imagePathList !== null &&
        communityData?.data.imagePathList !== undefined &&
        communityData.data.imagePathList.length > 0 ? (
          <Image src={communityData.data.imagePathList[0]} alt="" width={550} height={380} />
        ) : (
          <></>
        )}
        <S.Content>{communityData?.data.content}</S.Content>
        <Comment />
      </S.Main>
    </S.PostDetail>
  );
};

export default PostDetail;
