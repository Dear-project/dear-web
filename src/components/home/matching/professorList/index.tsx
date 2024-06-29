import React, { useEffect } from "react";
import Image from "next/image";
import ProfessorImg from "src/asset/ProfessorProfile.svg";
import Skillbook from "src/asset/skillbook.svg";
import BestRecmmand from "src/asset/BestRecommand.svg";
import * as S from "../style";
import { useProfessorQuery } from "src/queries/professor/professor.query";
import useMatching from "src/hooks/matching/useMatching";

interface Props {
  onclick: () => void;
  page: number;
}

const index = ({ onclick, page }: Props) => {
  const { ...professor } = useMatching();
  const professorList = professor.getProfessorList(page);

  return (
    <>
      <S.ProfessorWrap onClick={onclick}>
        <Image src={ProfessorImg} alt="교수 이미지" /> {/* 아마지 추가 예정 (서버 api수정 후) */}
        <S.ProfessorInfoWrap>
          {professorList?.data.map((item, idx) => (
            <S.ProfessorInfo key={idx}>
              <span>{item.name}</span>
              <S.BestRecommand>
                <Image src={BestRecmmand} alt="" width={70} height={30} />
              </S.BestRecommand>
              <S.ProfessorSubAndSkills>
                <span>{item.school}</span>
              </S.ProfessorSubAndSkills>
            </S.ProfessorInfo>
          ))}
        </S.ProfessorInfoWrap>
      </S.ProfessorWrap>
    </>
  );
};

export default index;
