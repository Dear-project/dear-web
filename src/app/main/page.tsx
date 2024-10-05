"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/common/banner";
import Find from "@/components/home/mainPageProfessor";
import SelectSchoolModal from "src/components/common/selectSchoolModal/index";
import { useGetProfileInfo } from "@/queries/profile/query";
import ProfessorMainView from "@/components/home/professorView/mainPage/index";
import AllowOrDenyModal from "@/components/home/professorView/modal/allowOrDenyModal";
import Matching from "@/components/home/main/matching/index";
import Community from "@/components/home/main/community/index";
const index = () => {
  const { data } = useGetProfileInfo();
  return (
    <S.Page>
      <S.MainView>
        <S.MainBox>
          <Matching/>
          <Community/>
        </S.MainBox>
        <Banner />    
      </S.MainView>
      <S.SidePage>
        
      </S.SidePage>
    </S.Page>
  );
};

export default index;
