import React from "react";
import * as S from "../style";
import Profile from "@/asset/Avatar.svg";
import Image from "next/image";
import BestRecommnad from "@/asset/BestRecommand.svg";

const ProfessorList = () => {
  return (
    <>
      <h1>교수랭킹</h1>
      <S.ProfessorListWrap>
        <S.Professor>
          <Image src={Profile} alt="프로필" width={75} height={75} />
          <div>
            <h1>이해준</h1>
            <span>영남대학교 박승철 헤어과</span>
            <Image src={BestRecommnad} alt="절때 떨어지지 말아라" width={50} height={20} />
          </div>
        </S.Professor>
        <S.Professor>
          <Image src={Profile} alt="프로필" width={75} height={75} />
          <div>
            <h1>이해준</h1>
            <span>영남대학교 박승철 헤어과</span>
            <Image src={BestRecommnad} alt="절때 떨어지지 말아라" width={50} height={20} />
          </div>
        </S.Professor>
        <S.Professor>
          <Image src={Profile} alt="프로필" width={75} height={75} />
          <div>
            <h1>이해준</h1>
            <span>영남대학교 박승철 헤어과</span>
            <Image src={BestRecommnad} alt="절때 떨어지지 말아라" width={50} height={20} />
          </div>
        </S.Professor>
        <S.Professor>
          <Image src={Profile} alt="프로필" width={75} height={75} />
          <div>
            <h1>이해준</h1>
            <span>영남대학교 박승철 헤어과</span>
            <Image src={BestRecommnad} alt="절때 떨어지지 말아라" width={50} height={20} />
          </div>
        </S.Professor>
      </S.ProfessorListWrap>
    </>
  );
};

export default ProfessorList;
