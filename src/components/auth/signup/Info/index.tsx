"use client";

import React from "react";
import * as S from "./style";
import TextField from "@/components/common/textField";
import useInfo from "@/hooks/auth/signup/useInfo";

const SignupInfo = () => {
  const { ...hooks } = useInfo();

  return (
    <S.Main>
      <S.SignUpInfolWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap>
          <TextField
            id="text"
            name="name"
            type="text"
            functions="text"
            value={hooks.infoData.name}
            onchange={hooks.hanldeDataChnage}
            labelStyle={{ top: "41%" }}
          >
            이름
          </TextField>
       
            <TextField
              id="text"
              name="birthday"
              type="text"
              functions="text"
              labelStyle={{ top: "52%" }}
              value={hooks.infoData.birthday}
              onchange={hooks.hanldeDataChnage}
            >
              생년월일
            </TextField>
  
  
            <TextField
              id="text"
              name="type"
              type="text"
              functions="text"
              value={hooks.infoData.type}
              onchange={hooks.hanldeDataChnage}
              labelStyle={{ top: "63%" }}
            >
              분류
            </TextField>
  
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton onClick={()=>window.history.back()}>이전</S.BackButton>
          <S.NextButton onClick={hooks.onSignup}>완료</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpInfolWrap>
    </S.Main>
  );
};

export default SignupInfo;
