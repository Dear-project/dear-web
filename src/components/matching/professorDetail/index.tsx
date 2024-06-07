"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "src/asset/Avatar.svg";
import BestRecommandImg from "src/asset/BestRecommand.svg";
import Subject from "src/asset/Subject.png";

const index = () => {
  return (
    <S.ProfessorDetailWrap>
      <S.Main>
        <S.InfoWrap>
          <S.UtilityWrap>
            <S.ProfileWrap>
              <Image src={Avartar} alt="프로필 이미지" />
              <div>
                <h1>이해준 교수</h1>
                <span>영남이공대 박승철 헤어과</span>
              </div>
              <S.BestRecommandIcon>
                <Image src={BestRecommandImg} alt="최다 추천" />
              </S.BestRecommandIcon>
            </S.ProfileWrap>
            <S.ButtonWrap>
              <button>채팅하기</button>
            </S.ButtonWrap>
          </S.UtilityWrap>
          <S.OneLiner>헤어 봉사하는것을 좋아합니다.</S.OneLiner>
          <S.Subject>
            <Image src={Subject} alt="전문과목" />
            <span>전문과목 : 수능영어, 고등진로</span>
          </S.Subject>
        </S.InfoWrap>
        <S.CareerWrap>
          <h1>경력</h1>
          <S.Careers>
            <span>2021.02.02</span>
            <span>포항 제철 고등학교 졸업</span>
          </S.Careers>
          <S.Careers>
            <span>2021.02.02</span>
            <span>포항 제철 고등학교 졸업</span>
          </S.Careers>
          <S.Careers>
            <span>2021.02.02</span>
            <span>포항 제철 고등학교 졸업</span>
          </S.Careers>
        </S.CareerWrap>
      </S.Main>
    </S.ProfessorDetailWrap>
  );
};

export default index;
