"use client";
import React,{useCallback,useState} from "react";
import * as S from "./style";
import Banner from "@/components/home/banner";
import ProfessorCommunity from "@/components/home/main/professorCommunity";
import Matching from "@/components/home/main/matching/index";
import Community from "@/components/home/main/community/index";
import { useRecoilState } from "recoil";
import { IsFirst } from "@/store/profile/profile.store";
import SelectModal from "@/components/common/selectModal";

const index = () => {
  const [isFirst, setIsFirst] = useRecoilState(IsFirst);
  const closeModal = useCallback(() => {
      setIsFirst(false);
    }, []);

    
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
      <SelectModal
      isOpen={isFirst}
      close={closeModal}
      />
      {/* <SelectMajorModal/>
      <SelectSchoolModal /> */}
    </>
  );
};

export default index;
