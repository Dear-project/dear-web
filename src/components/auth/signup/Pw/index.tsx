"use client";

import React from "react";
import * as S from "./style";
import TextField from "src/components/common/textField";
import usePassword from "src/hooks/Auth/signup/usePassword";

const SignupPw = () => {
  const { ...hooks } = usePassword();

  return (
    <>
      <S.Main>
        <S.SignUpEmailWrap>
          <S.DearLogo>DEAR.</S.DearLogo>
          <S.VerifyWrap>
            <TextField
              id="password"
              name="pw"
              type="password"
              value={hooks.passwordData.pw}
              onchange={hooks.handleDataChange}
              functions="password"
              labelStyle={{ top: "47%" }}
            >
              비밀번호 입력
            </TextField>
              <TextField
                id="checkPw"
                name="checkPw"
                type="password"
                value={hooks.passwordData.checkPw}
                onchange={hooks.handleDataChange}
                functions="checkPw"
                labelStyle={{ top: "57%" }}
              >
                비밀번호 확인
              </TextField>
            
          </S.VerifyWrap>
          <S.ButtonWrap>
            <S.BackButton onClick={()=>window.history.back()}>이전</S.BackButton>
            <S.NextButton onClick={hooks.onCheckPw}>다음 단계</S.NextButton>
          </S.ButtonWrap>
        </S.SignUpEmailWrap>
      </S.Main>
    </>
  );
};

export default SignupPw;
