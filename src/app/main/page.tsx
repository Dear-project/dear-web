"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/common/banner";
import Find from "@/components/home/mainPageProfessor";
import SelectSchoolModal from "src/components/common/selectSchoolModal/index";
import { useGetProfileInfo } from "@/queries/profile/query";
import ProfessorMainView from "@/components/home/professorView/mainPage/index";
import AllowOrDenyModal from "@/components/home/professorView/modal/allowOrDenyModal";

const index = () => {
  const { data } = useGetProfileInfo();
  return (
    <>
      <S.Page>
        <Banner />
        {data?.data.role === "PROFESSOR" ? <ProfessorMainView /> : <Find />}
      </S.Page>
      <SelectSchoolModal isOpen={data?.data.schoolName === null} />
    </>
  );
};

export default index;
