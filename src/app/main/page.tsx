"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/common/banner";
import Find from "@/components/home/mainPageProfessor";
import SelectSchoolModal from "src/components/common/selectSchoolModal/index";
import { useGetProfileInfo } from "@/queries/profile/query";

const index = () => {
  const { data } = useGetProfileInfo();
  return (
    <>
      <S.Page>
        <Banner />
        <Find />
      </S.Page>
      <SelectSchoolModal isOpen={data?.data.schoolName === null} />
    </>
  );
};

export default index;
