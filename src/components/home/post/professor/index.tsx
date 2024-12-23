import React from "react";
import * as S from "../../community/style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { convertDescriptionDate, convertCreatedDate } from "@/utils/transform/date/convertDate";
import ChatIcon from "@/asset/chatIcon.svg";
import Avartar from "@/asset/img/Avatar.svg";
import { useAllGetProfessorCommunityQuery } from "@/queries/community/professor/professorCommunity.query";

const ProfessorPost = () => {
  const router = useRouter();
  const { data: communityList } = useAllGetProfessorCommunityQuery(1);
  return (
    <S.CommunityPostWrap>
      {Array.isArray(communityList?.data) &&
        communityList?.data.map((community) => (
          <S.CommunityPost key={community.id} onClick={() => router.push(`/community/professor/${community.id}`)}>
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

export default ProfessorPost;
