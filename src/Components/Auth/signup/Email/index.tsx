import React from "react";
import * as S from "./style";
import useEmail from "src/Hooks/Auth/signup/Email/useEmail";
import TextField from "src/Components/common/TextField";

const SignUpEmail = () => {
  const { ...hooks } = useEmail();
  return (
    <S.Main>
      <S.SignUpEmailWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap>
          <TextField
            id="email"
            type="email"
            name="email"
            value={hooks.signupData.email}
            functions="email"
            onchange={hooks.handleSignupChange}
            labelStyle={{ top: "47%" }}
          >
            이메일 주소
          </TextField>
          <div style={{ display: "flex", width: "485px", marginTop: "5vh" }}>
            <TextField
              id="verifyNum"
              type="text"
              name="verifyNum"
              value={hooks.signupData.verifyNum}
              functions="verifyNum"
              onchange={hooks.handleSignupChange}
              labelStyle={{ top: "57%" }}
            >
              인증번호 6자리 입력
            </TextField>
            <S.VerifyButton onClick={hooks.handleCheckVerifyNum}>인증번호 확인</S.VerifyButton>
          </div>
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton>이전</S.BackButton>
          <S.NextButton onClick={hooks.handleConfirmButton}>이메일 인증하기</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpEmailWrap>
    </S.Main>
  );
};

export default SignUpEmail;
