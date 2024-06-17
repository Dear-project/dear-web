import React from "react";
import * as S from "./style";
import img123 from "public/svgs/툰게더 이미지 1.svg";

const index = () => {
  let list = ["간호학", "의예", "컴퓨터 공학 학", "치예의", "생명과학"];
  return (
    <S.Main>
      <S.Title>추천 교수</S.Title>
      <S.professor>
        <S.List>
          <S.Img src={img123} alt="" />
          <S.Bunddle>
            <S.FontBuddle>
              <S.TextName>교수님</S.TextName>
              <S.TextBunddle>
                <S.TextSub>{list[0]}과</S.TextSub>
                <S.MiniBunddle>
                  <img src="Group 288.svg" alt="" />
                  <S.TextSub>전문과목</S.TextSub>
                </S.MiniBunddle>
              </S.TextBunddle>
            </S.FontBuddle>
            <S.Sub>
              <S.SubText>최다추천</S.SubText>
            </S.Sub>
          </S.Bunddle>
        </S.List>
      </S.professor>
    </S.Main>
  );
};

export default index;
