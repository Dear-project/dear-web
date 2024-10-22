import React from "react";
import * as S from "./style";
import ProfileImg from "@/asset/img/Avatar.svg";
import Image from "next/image";
import { useGetProfessorDetailQuery } from "@/queries/professor/professor.query";
import { useParams } from "next/navigation";

const ProfessorDetail = () => {
  const { id } = useParams();
  const { data: professorData } = useGetProfessorDetailQuery(+id);

  return (
    <S.ProfessorDetailWrap>
      <S.Main>
        <S.Professor>
          <Image
            src={professorData?.data.imgPath ? professorData.data.imgPath : ProfileImg}
            alt="프로필 이미지"
            width={80}
            height={80}
          />
          <div>
            <h1>{professorData?.data.name}&nbsp;교수</h1>
            <span>{professorData?.data.stsMessage}</span>
          </div>
        </S.Professor>
        <S.InfoWrap>
          <S.InfoTitle>교수님 정보</S.InfoTitle>
          <h1>재직 중인 대학교</h1>
          <div>
            <div>
              <h4>대학명</h4>
              <span>{professorData?.data.schoolName}</span>
            </div>
            <div>
              <h4>학과</h4>
              <span>{professorData?.data.mclass}</span>
            </div>
            <div>
              <h4>이메일</h4>
              <span>{professorData?.data.email}</span>
            </div>
          </div>
          <S.Button>노크하기</S.Button>
        </S.InfoWrap>
      </S.Main>
    </S.ProfessorDetailWrap>
  );
};

export default ProfessorDetail;
