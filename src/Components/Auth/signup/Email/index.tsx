import React from "react";
import * as S from "./style";
import useEmail from "src/Hooks/Auth/signup/Email/useEmail";

const SignUpEmail = () => {
  const { ...hooks } = useEmail();

  return (
    <S.Main>
      <S.SignUpEmailWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap>
          <S.Input
            type="'email"
            placeholder="이메일 주소"
            onChange={hooks.handleChangeEmail}
            value={hooks.email}
            style={{ marginTop: "-5vh" }}
          />
          {hooks.emailValid === false && <S.ErrorMessageWrap>이메일을 정확하게 입력해주세요</S.ErrorMessageWrap>}
          {hooks.sendVerify && (
            <S.EmailVerifyWrap>
              <S.Input
                type="text"
                placeholder="인증번호 6자리 입력"
                style={{ marginTop: "1vh" }}
                onChange={(e) => hooks.setVerifyNum(e.target.value)}
                value={hooks.verifyNum}
              />
              <S.VerifyButton onClick={hooks.handleCheckVerifyNum}>인증번호 확인</S.VerifyButton>
            </S.EmailVerifyWrap>
          )}
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
