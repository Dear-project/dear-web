"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "src/asset/Avatar.svg";
import BestRecommandImg from "src/asset/BestRecommand.svg";
import useMatching from "@/hooks/matching/useMatching";
import { useParams } from "next/navigation";

const index = () => {
  const { ...professor } = useMatching();
  const { id } = useParams();

  const professorDetailList = professor.getProfessorDetail(Number(id));
  const reviews = professor.getReviews(1, Number(id));
  const schoolInfo = professorDetailList?.data.schoolName + " " + professorDetailList?.data.mclass;
  return (
    <S.ProfessorDetailWrap>
      <S.Main>
        <S.ProffesorInfoWrap>
          <div>
            {professorDetailList?.data.imgPath !== null ? (
              <Image src={professorDetailList?.data.imgPath!} alt="" width={100} height={100} />
            ) : (
              <Image src={Avartar} alt="교수 프로필 이미지" width={100} height={100} />
            )}
            <div>
              <h1>{professorDetailList?.data.name}</h1>
              <span>{schoolInfo}</span>
              <Image src={BestRecommandImg} alt="최다추천 이미지" width={70} height={30} />
            </div>
          </div>
          <S.ChatButton onClick={() => professor.postMatching(Number(professorDetailList?.data.professorId))}>
            채팅하기
          </S.ChatButton>
        </S.ProffesorInfoWrap>
        <S.CarrerAndReviewWrap>
          <S.CarrerWrap>
            <h1>경력</h1>
            <div>
              <div>
                <span>2021.02.02</span>
                <span>포항 제철고등학교 졸업</span>
              </div>
              <div>
                <span>2021.02.02</span>
                <span>포항 제철고등학교 졸업</span>
              </div>
              <div>
                <span>2021.02.02</span>
                <span>포항 제철고등학교 졸업</span>
              </div>
            </div>
          </S.CarrerWrap>
          <S.ReviewWrap>
            <h1>후기</h1>
            {reviews?.data.map((item, idx) => (
              <div key={idx}>
                {/* <span>시간</span> */}
                <span>{item.comment}</span>
              </div>
            ))}
          </S.ReviewWrap>
        </S.CarrerAndReviewWrap>
      </S.Main>
    </S.ProfessorDetailWrap>
  );
};

export default index;
