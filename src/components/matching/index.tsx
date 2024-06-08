"use client";
import React from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "src/asset/search.svg";
import ProfessorList from "src/components/matching/professorList/index";
import { useRouter } from "next/navigation";
import useMatching from "src/hooks/matching/useMatching";
import { useParams } from "react-router-dom";

const index = () => {
  const router = useRouter();
  const { id } = useParams();
  return (
    <S.FindProfessorWrap>
      <S.SearchProfessorWrap>
        <S.SearchProfessor>
          <input type="text" />
          <Image src={Search} alt="검색" />
        </S.SearchProfessor>
      </S.SearchProfessorWrap>
      <S.Main>
        <ProfessorList onclick={() => router.push(`/find/professor/${id}`)} />
      </S.Main>
    </S.FindProfessorWrap>
  );
};

export default index;
