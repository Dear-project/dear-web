import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import useInfo from "src/hooks/auth/signup/useInfo";
import student from "@/asset/img/signup/student.svg";
import professor from "@/asset/img/signup/professor.svg";

const UserRole = () => {
  const { ...hooks } = useInfo();
  console.log(hooks.infoData);

  return (
    <>
      <S.Main>
        <S.UserRoleEmailWrap>
          <S.DearLogo>DEAR.</S.DearLogo>
          <S.UserExplanation>
            <span>회원 타입을 선택해 주세요.</span>
          </S.UserExplanation>
          <S.VerifyWrap>
            <S.UserCheckBox
              onClick={() => hooks.setInfoData((prev) => ({ ...prev, type: "USER" }))}
              selected={hooks.infoData.type === "USER"}
            >
              <Image src={student} alt="학생" />
              <span>학생</span>
            </S.UserCheckBox>
            <S.UserCheckBox
              onClick={() => hooks.setInfoData((prev) => ({ ...prev, type: "PROFESSOR" }))}
              selected={hooks.infoData.type === "PROFESSOR"}
            >
              <Image src={professor} alt="교수" />
              <span>교수</span>
            </S.UserCheckBox>
          </S.VerifyWrap>
          <S.ButtonWrap>
            <S.BackButton onClick={() => window.history.back()}>이전</S.BackButton>
            <S.NextButton onClick={hooks.userCheck} disabled={!hooks.infoData.type}>
              다음 단계
            </S.NextButton>
          </S.ButtonWrap>
        </S.UserRoleEmailWrap>
      </S.Main>
    </>
  );
};

export default UserRole;
