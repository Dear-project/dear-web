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
            name="password"
            type="password"
            value={hooks.pw}
            onchange={hooks.handleChagnePw}
            functions="password"
          >
            비밀번호 입력
          </TextField>
          {hooks.pwValid === false && (
            <S.ErrorMessageWrap>비밀번호는 영문, 숫자 특수문자 포함 8글자 이상입니다.</S.ErrorMessageWrap>
          )}
          <TextField
            id="pwCheck"
            name="pwCheck"
            type="password"
            value={hooks.checkPw}
            onchange={(e) => hooks.setCheckPw(e.target.value)}
            functions="pwCheck"
          >
            비밀번호 확인
          </TextField>
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
