"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/home/banner";
import { useGetProfileInfo } from "@/queries/profile/query";
import ProfessorCommunity from "@/components/home/main/professorCommunity";
import Matching from "@/components/home/main/matching/index";
import Community from "@/components/home/main/community/index";
import SelectSchoolModal from "@/components/common/selectSchoolModal";

const index = () => {
  return (
    <>
      <S.Page>
        <S.MainView>
          <ProfessorCommunity />
          <Banner />
          <S.MainBox>
            <Matching />
            <Community />
          </S.MainBox>
        </S.MainView>
      </S.Page>
      <SelectSchoolModal />
    </>
  );
};

export default index;
