"use client";

import React from "react";
import * as S from "./style";
import TextField from "src/Components/common/TextField";
import useEmail from "src/Hooks/Auth/signup/useEmail";

const SignUpEmail = () => {
  const { ...hooks } = useEmail();

  return (
    <>
      <S.Main>
        <S.SignUpEmailWrap>
          <S.DearLogo>DEAR.</S.DearLogo>
          <S.VerifyWrap>
            <S.Verify>
              <TextField
                id="email"
                type="email"
                name="email"
                value={hooks.emailData.email}
                functions={hooks.onAuthCode}
                onchange={hooks.handleDataChange}
                labelStyle={{ top: "47%" }}
              >
                이메일 주소
              </TextField>
              <S.VerifyButton onClick={hooks.onAuthCode}>인증번호 전송</S.VerifyButton>
            </S.Verify>
            <div style={{ display: "flex", width: "485px", marginTop: "5vh" }}>
              <TextField
                id="verifyNum"
                type="text"
                name="authCode"
                value={hooks.emailData.authCode}
                functions="authCode"
                onchange={hooks.handleDataChange}
                labelStyle={{ top: "57%" }}
              >
                인증번호 6자리
              </TextField>
              {hooks.resend === true && (
                <>
                  <span>{hooks.formmatedTime}</span>
                  <span
                    style={{ position: "absolute", left: "53%", top: "55%", cursor: "pointer" }}
                    onClick={hooks.onAuthCode}
                  >
                    재 전송
                  </span>
                </>
              )}
            </div>
          </S.VerifyWrap>
          <S.ButtonWrap>
            <S.BackButton>이전</S.BackButton>
            <S.NextButton onClick={hooks.onCheckAuthCode}>이메일 인증하기</S.NextButton>
          </S.ButtonWrap>
        </S.SignUpEmailWrap>
      </S.Main>
    </>
  );
};

export default SignUpEmail;
