import React from "react";
import * as S from "../../style";
import Image from "next/image";
import Profile from "@/asset/Profile.svg";
import { useParams } from "next/navigation";
import { convertPostDetailDate } from "@/utils/transform/date/convertDate";
import { useGetProfessorCommunityById } from "@/queries/community/professor/professorCommunity.query";

const ProfessorPost = () => {
  const { id } = useParams();
  const { data: profesorCommunityData } = useGetProfessorCommunityById(+id);
  return (
    <S.PostWrap>
      <S.WriterInfo>
        <Image
          src={profesorCommunityData?.data.profileImage ? profesorCommunityData.data.profileImage : Profile}
          alt="프로필 이미지"
          width={60}
          height={60}
        />
        <div>
          <h1>{profesorCommunityData?.data.userName}</h1>
          <span>{convertPostDetailDate(profesorCommunityData?.data.modifiedDateTime!)}</span>
        </div>
      </S.WriterInfo>
      <S.ContentWrap>
        <h1>{profesorCommunityData?.data.title}</h1>
        <span>{profesorCommunityData?.data.content}</span>
        {profesorCommunityData?.data.imagePathList?.map((img, idx) => (
          <Image key={idx} src={img} alt="게시물 이미지" width={400} height={400} />
        ))}
      </S.ContentWrap>
    </S.PostWrap>
  );
};

export default ProfessorPost;
