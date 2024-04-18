import React from "react";
import * as S from "./style";
import usePw from "src/Hooks/Auth/signup/Pw/usePw";
import TextField from "src/Components/common/TextField";

const SignupPw = () => {
  const { ...hooks } = usePw();

  return (
    <S.Main>
      <S.SignUpEmailWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.VerifyWrap>
          <TextField
            id="password"
            name="pw"
            type="password"
            value={hooks.signupData.pw}
            onchange={hooks.handleSignupChange}
            functions="password"
            labelStyle={{ top: "47%" }}
          >
            비밀번호 입력
          </TextField>
          {hooks.pwValid === false && (
            <S.ErrorMessageWrap>비밀번호는 영문, 숫자 특수문자 포함 8글자 이상입니다.</S.ErrorMessageWrap>
          )}
          <div style={{ display: "flex" }}>
            <TextField
              id="checkPw"
              name="checkPw"
              type="password"
              value={hooks.signupData.checkPw}
              onchange={hooks.handleSignupChange}
              functions="checkPw"
              labelStyle={{ top: "57%" }}
            >
              비밀번호 확인
            </TextField>
          </div>
          {hooks.pwAllow === false && <S.ErrorMessageWrap>비밀번호가 일치하지 않습니다.</S.ErrorMessageWrap>}
        </S.VerifyWrap>
        <S.ButtonWrap>
          <S.BackButton>이전</S.BackButton>
          <S.NextButton onClick={hooks.handleConfirmButton}>다음</S.NextButton>
        </S.ButtonWrap>
      </S.SignUpEmailWrap>
    </S.Main>
  );
};

export default SignupPw;
