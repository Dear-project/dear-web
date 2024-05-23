import React from "react";
import Image from "next/image";
import ProfessorImg from "src/asset/ProfessorProfile.svg";
import Skillbook from "src/asset/skillbook.svg";
import BestRecmmand from "src/asset/BestRecommand.svg";
import * as S from "../style";

interface Props {
  onclick: () => void;
}

const index: React.FC<Props> = ({ onclick }) => {
  return (
    <>
      <S.ProfessorWrap onClick={onclick}>
        <Image src={ProfessorImg} alt="교수 이미지" />
        <S.ProfessorInfoWrap>
          <S.ProfessorInfo>
            <span>이해준 교수</span>
            <S.ProfessorSubAndSkills>
              <span>영남이공대 박승철 헤어과</span>
              <div>
                <Image src={Skillbook} alt="" />
                <span>전공과목 : 고등영어, 수학</span>
              </div>
            </S.ProfessorSubAndSkills>
          </S.ProfessorInfo>
        </S.ProfessorInfoWrap>
        <S.BestRecommand>
          <Image src={BestRecmmand} alt="" />
        </S.BestRecommand>
      </S.ProfessorWrap>
    </>
  );
};

export default index;
