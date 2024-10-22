"use client";

import React from "react";
import * as S from "./style";
import TextField from "@/components/common/textField";
import useEmail from "@/hooks/auth/signup/useEmail";

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
              <S.VerifyButton onClick={hooks.onAuthCode}>    {hooks.loading ? "전송 중..." : "인증번호 전송"} </S.VerifyButton>
            </S.Verify>
            <S.retryVerify>
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
                  <span style={{ position: "absolute", left: "75%", top: "54%" }}>{hooks.formattedTime}</span>
                  <span
                    style={{ position: "absolute", left: "90%", top: "54%", cursor: "pointer" }}
                    onClick={hooks.onAuthCode}
                  >
                    재 전송
                  </span>
                </>
              )}
            </S.retryVerify>
          </S.VerifyWrap>
          <S.ButtonWrap>
            <S.BackButton onClick={() => window.history.back()}>이전</S.BackButton>
            <S.NextButton onClick={hooks.onCheckAuthCode}>이메일 인증하기</S.NextButton>
          </S.ButtonWrap>
        </S.SignUpEmailWrap>
      </S.Main>
    </>
  );
};

export default SignUpEmail;
