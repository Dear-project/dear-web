import React from "react";
import * as S from "../../style";
import Image from "next/image";
import Avartar from "@/asset/img/Avatar.svg";
import ChatIcon from "@/asset/chatIcon.svg";
import { convertCreatedDate, convertDescriptionDate } from "@/utils/transform/date/convertDate";
import { useGetMyProfessorArticles } from "@/queries/community/professor/professorCommunity.query";

const ProfessorMyArticles = () => {
  const { data: myArticles } = useGetMyProfessorArticles(1);
  return (
    <S.MyPost>
      {myArticles?.data.map((myArticles) => (
        <S.PostWrap key={myArticles.id}>
          <h1>{myArticles.title}</h1>
          <S.TimeStamp>{convertDescriptionDate(myArticles.modifiedDateTime)}</S.TimeStamp>
          <S.Description>{myArticles.content.substring(0, 13)}</S.Description>
          <S.PostInfo>
            <Image
              src={myArticles.profileImage ? myArticles.profileImage : Avartar}
              alt="프로필 이미지"
              width={35}
              height={35}
            />
            <span>{myArticles.userName}</span>
            <span style={{ fontSize: "15px" }}>{convertCreatedDate(myArticles.createdDateTime)}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={ChatIcon} alt="댓글" />
              <span style={{ fontSize: "12px" }}>{myArticles.comment}</span>
            </div>
          </S.PostInfo>
        </S.PostWrap>
      ))}
    </S.MyPost>
  );
};

export default ProfessorMyArticles;
