"use client";
import React from "react";
import * as S from "./style";
import Image from "next/image";
import Search from "src/asset/search.svg";
import ProfessorList from "src/components/matching/professorList/index";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();
  return (
    <S.FindProfessorWrap>
      <S.SearchProfessorWrap>
        <S.SearchProfessor>
          <input type="text" />
          <Image src={Search} alt="검색" />
        </S.SearchProfessor>
      </S.SearchProfessorWrap>
      <S.Main>
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
        <ProfessorList onclick={() => router.push("/matching/professor")} />
      </S.Main>
    </S.FindProfessorWrap>
  );
};

export default index;
