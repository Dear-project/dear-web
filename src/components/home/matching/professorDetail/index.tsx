"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "src/asset/Avatar.svg";
import BestRecommandImg from "src/asset/BestRecommand.svg";
import useMatching from "@/hooks/matching/useMatching";

const index = () => {
  const { ...professor } = useMatching();
  const professorDetailList = professor.getProfessorDetail();
  const schoolInfo =
    professorDetailList?.data.schoolName +
    " " +
    professorDetailList?.data.lclass +
    " " +
    professorDetailList?.data.mclass;
  return (
    <S.ProfessorDetailWrap>
      <S.Main>
        <S.ProffesorInfoWrap>
          <div>
            {professorDetailList?.data.img !== undefined ? (
              <Image src={professorDetailList.data.img} alt="" />
            ) : (
              <Image src={Avartar} alt="교수 프로필 이미지" width={100} height={100} />
            )}
            <div>
              <h1>{professorDetailList?.data.name}</h1>
              <span>{schoolInfo}</span>
              <Image src={BestRecommandImg} alt="최다추천 이미지" width={70} height={30} />
            </div>
          </div>
          <S.ChatButton>채팅하기</S.ChatButton>
        </S.ProffesorInfoWrap>
        <S.CarrerAndReviewWrap>
          <S.CarrerWrap>
            <h1>경력</h1>
            <div>
              <div>
                <span>2021.02.01</span>
                <span>포항 제철고등학교 졸업</span>
              </div>
              <div>
                <span>2021.02.01</span>
                <span>영남이공대학교 박승철 헤어과 입학</span>
              </div>
              <div>
                <span>2021.02.01</span>
                <span>포항 제철고등학교 졸업</span>
              </div>
            </div>
          </S.CarrerWrap>
          <S.ReviewWrap>
            <h1>후기</h1>
          </S.ReviewWrap>
        </S.CarrerAndReviewWrap>
      </S.Main>
    </S.ProfessorDetailWrap>
  );
};

export default index;
