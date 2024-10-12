"use client";
import React, { useEffect } from "react";
import * as S from "./style";
import Image from "next/image";
import Profile from "src/asset/Profile.svg";
import { useParams } from "next/navigation";
import usePost from "@/hooks/community/post/usePost";
import { convertPostDetailDate } from "@/utils/transform/date/convertDate";
import { useGetCommunityById } from "@/queries/community/community.query";

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
      <S.CommentWrap>
        <S.CommentWrapTitle>댓글</S.CommentWrapTitle>
        <S.CommentContentWrap>
          <S.Comment></S.Comment>
        </S.CommentContentWrap>
      </S.CommentWrap>
    </S.PostDetail>
  );
};

export default PostDetail;
