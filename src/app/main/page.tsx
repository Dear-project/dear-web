"use client";
import React from "react";
import * as S from "./style";
import Banner from "@/components/home/banner";
import ProfessorCommunity from "@/components/home/main/professorCommunity";
import Matching from "@/components/home/main/matching/index";
import Community from "@/components/home/main/community/index";
import { useRecoilState } from "recoil";
import { IsFirst } from "@/store/profile/profile.store";
import SelectModal from "@/components/common/selectModal";
import { ProfileAtom } from "@/store/profile/profile.store";

const Page = () => {
  const [isFirst, setIsFirst] = useRecoilState(IsFirst);
  const [isProfileAtom, setProfileAtom] = useRecoilState(ProfileAtom);
  let sectionLocation = "first"
  if(isProfileAtom?.mclass === null && isProfileAtom.schoolName !== null) {
    sectionLocation="second"
  }

    
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
      sectionLocation={sectionLocation}
      />
    </>
  );
};

export default Page;
