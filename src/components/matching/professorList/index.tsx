import React from "react";
import Image from "next/image";
import ProfessorImg from "src/asset/ProfessorProfile.svg";
import Skillbook from "src/asset/skillbook.svg";
import BestRecmmand from "src/asset/BestRecommand.svg";
import * as S from "../style";
import useMatching from "src/hooks/matching/useMatching";

interface Props {
  onclick: () => void;
}

const index: React.FC<Props> = ({ onclick }) => {
  const { professor } = useMatching();
  return (
    <>
      <S.ProfessorWrap onClick={onclick}>
        <Image src={ProfessorImg} alt="교수 이미지" /> {/* 아마지 추가 예정 (서버 api수정 후) */}
        <S.ProfessorInfoWrap>
          {professor.map((prs, idx) => (
            <S.ProfessorInfo key={idx}>
              <span>{prs.data.name}</span>
              <S.ProfessorSubAndSkills>
                <span>{prs.data.school}</span>
                <div>
                  <Image src={Skillbook} alt="" />
                  <span>{prs.data.major}</span>
                </div>
              </S.ProfessorSubAndSkills>
            </S.ProfessorInfo>
          ))}
        </S.ProfessorInfoWrap>
        <S.BestRecommand>
          <Image src={BestRecmmand} alt="" />
        </S.BestRecommand>
      </S.ProfessorWrap>
    </>
  );
};

export default index;
