"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/home/banner";
import { useGetProfileInfo } from "@/queries/profile/query";
import Matching from "@/components/home/main/matching/index";
import Community from "@/components/home/main/community/index";
import ProfessorCommunity from "@/components/home/main/professorCommunity";
const index = () => {
  const { data } = useGetProfileInfo();
  return (
    <>
      <S.Page>
        <Banner />
        {data?.data.role === "PROFESSOR" ? <ProfessorMainView /> : <Find />}
      </S.Page>
      <SelectSchoolModal />
    </>
  );
};

export default index;
