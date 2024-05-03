"use client";

import React from "react";
import * as S from "./style";
import TextField from "src/Components/common/TextField";
import useInfo from "src/Hooks/Auth/signup/useInfo";

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
          <div>
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
          </div>
          <div>
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
          </div>
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton>이전</S.BackButton>
          <S.NextButton onClick={hooks.onSignup}>완료</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpInfolWrap>
    </S.Main>
  );
};

export default SignupInfo;
