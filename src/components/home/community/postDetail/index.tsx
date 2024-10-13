"use client";
import React, { useEffect } from "react";
import * as S from "./style";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";
import { useParams } from "next/navigation";
import { convertPostDetailDate } from "@/utils/transform/date/convertDate";
import { useGetCommunityById } from "@/queries/community/community.query";
import Comment from "../comment";

const PostDetail = () => {
  const { id } = useParams();
  const { data: communityData } = useGetCommunityById(+id);

  return (
    <S.PostDetail>
      <S.PostWrap>
        <S.WriterInfo>
          <Image
            src={communityData?.data.profileImage ? communityData.data.profileImage : Profile}
            alt="프로필 이미지"
            width={60}
            height={60}
          />
          <div>
            <h1>{communityData?.data.userName}</h1>
            <span>{convertPostDetailDate(communityData?.data.modifiedDateTime!)}</span>
          </div>
        </S.WriterInfo>
        <S.ContentWrap>
          <h1>{communityData?.data.title}</h1>
          <span>{communityData?.data.content}</span>
          {communityData?.data.imagePathList?.map((img, idx) => (
            <Image key={idx} src={img} alt="게시물 이미지" width={400} height={400} />
          ))}
        </S.ContentWrap>
      </S.PostWrap>
      <Comment id={+id} />
    </S.PostDetail>
  );
};

export default PostDetail;
