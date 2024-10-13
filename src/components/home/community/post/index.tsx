import React from "react";
import * as S from "../style";
import { useAllGetCommunityQuery } from "@/queries/community/community.query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";
import ChatIcon from "@/asset/chatIcon.svg";
import Avartar from "@/asset/Avatar.svg";

const Post = () => {
  const router = useRouter();
  const { data: communityList } = useAllGetCommunityQuery(1);
  return (
    <S.CommunityPostWrap>
      {Array.isArray(communityList?.data) &&
        communityList?.data.map((community) => (
          <S.CommunityPost key={community.id} onClick={() => router.push(`/community/${community.id}`)}>
            <S.Title>{community.title}</S.Title>
            <S.TimeStamp>{convertDescriptionDate(community.modifiedDateTime)}</S.TimeStamp>
            <S.Description>{community.content.substring(0, 13)}</S.Description>
            <S.PostInfo>
              <Image
                src={community.profileImage ? community.profileImage : Avartar}
                alt="프로필사진"
                width={30}
                height={30}
              />
              <span>{community.userName}</span>
              <span style={{ fontSize: "15px" }}>{convertCreatedDate(community.createdDateTime)}</span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={ChatIcon} alt="댓글" />
                <span style={{ fontSize: "12px" }}>{community.comment}</span>
              </div>
            </S.PostInfo>
          </S.CommunityPost>
        ))}
    </S.CommunityPostWrap>
  );
};

export default Post;
