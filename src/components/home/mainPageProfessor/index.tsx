"use client";
import React, { useState } from "react";
import * as S from "./style";

import ProfessorList from "../matching/professorList/index";
import { useRouter } from "next/navigation";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ProfessorListPageAtom } from "src/Store/matching/matching.store";

const index = () => {
  const router = useRouter();
  const { id } = useParams();
  const [page, setPage] = useRecoilState(ProfessorListPageAtom);
  return (
    <S.FindProfessorWrap>
      <S.TitleHolder>
        <S.Title>추천 교수</S.Title>
      </S.TitleHolder>
      <S.Main>
        <ProfessorList page={page} />
      </S.Main>
    </S.FindProfessorWrap>
  );
};

export default index;
