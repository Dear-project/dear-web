import React from "react";
import * as S from "./style";
import Image from "public/images.jpeg";

const index = () => {
  let name = [
    "전민찬",
    "김가영",
    "윤세욱",
    "조영우",
    "이해준",
    "신민호",
    "전우진",
  ];
  let classed = [
    "간호학과",
    "의예과",
    "컴퓨터 공학 학과",
    "치예의과",
    "생명과학과",
    "법학과",
    "물리학과",
  ];
  let sub = ["수학", "국어", "과학", "생명과학", "사회", "화학", "역사"];
  return (
    // <div>
    <S.Box>
      {name.map((a, i) => {
        return (
          <S.Card>
            <S.Img src="/images.jpeg" alt="" />
            <S.Text>
              <S.Name>{name[i]}</S.Name>
              <S.Classed>{classed[i]}</S.Classed>
              <S.Sub>전문과목: {sub[i]}</S.Sub>
            </S.Text>
          </S.Card>
        );
      })}
    </S.Box>
    // </div>
  );
};

export default index;