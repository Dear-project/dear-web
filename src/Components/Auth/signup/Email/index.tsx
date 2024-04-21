"use client";

import React from "react";
import * as S from "./style";
import useEmail from "src/Hooks/Auth/signup/Email/useEmail";
import TextField from "src/Components/common/TextField";
import SignupPw from "../Pw";

const SignUpEmail = () => {
  const { ...hooks } = useEmail();
  return (
    <>
      <S.Main onShow={hooks.next}>
        <S.SignUpEmailWrap>
          <S.DearLogo>DEAR.</S.DearLogo>
          <S.VerifyWrap>
            <S.Verify>
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
              <S.VerifyButton onClick={hooks.handleSendAuthCode}>인증번호 전송</S.VerifyButton>
            </S.Verify>
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
                인증번호 6자리
              </TextField>
              {hooks.resend === true && (
                <span
                  style={{ position: "absolute", left: "53%", top: "55%", cursor: "pointer" }}
                  onClick={hooks.handleReSendAuthCode}
                >
                  재 전송
                </span>
              )}
              <S.VerifyButton onClick={hooks.handleCheckAuth}>인증번호 확인</S.VerifyButton>
            </div>
          </S.VerifyWrap>
          <S.ButtonWrap>
            <S.BackButton>이전</S.BackButton>
            <S.NextButton onClick={hooks.onNext}>이메일 인증하기</S.NextButton>
          </S.ButtonWrap>
        </S.SignUpEmailWrap>
      </S.Main>
      {hooks.next === true && <SignupPw onShow={hooks.next} />}
    </>
  );
};

export default SignUpEmail;
