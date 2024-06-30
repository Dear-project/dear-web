"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/common/banner";
import Find from "@/components/home/mainPageProfessor";
import SelectSchoolModal from "src/components/common/selectSchoolModal/index";

const index = () => {
  return (
    <>
      <S.Page>
        <Banner />
        <Find />
      </S.Page>
      <SelectSchoolModal />
    </>
  );
};

export default index;
