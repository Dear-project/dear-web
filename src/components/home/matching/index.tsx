"use client";
import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "src/asset/search.svg";
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
      <S.SearchProfessorWrap>
        <S.SearchProfessor>
          <input type="text" />
          <Image src={Search} alt="검색" />
        </S.SearchProfessor>
      </S.SearchProfessorWrap>
      <S.Main>
        <ProfessorList page={page} />
      </S.Main>
    </S.FindProfessorWrap>
  );
};

export default index;
