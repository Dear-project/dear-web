"use client";

import React from "react";
import * as S from "./style";
import useLogin from "src/Hooks/Auth/login/useLogin";
import TextField from "src/Components/common/TextField";

const Login = () => {
  const { ...hooks } = useLogin();

  return (
    <S.Main>
      <S.LoginWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <TextField
          id="email"
          name="userId"
          type="email"
          value={hooks.LoginData.userId}
          functions="email"
          onchange={hooks.handleLoginChange}
          labelStyle={{ top: "39%" }}
        >
          이메일
        </TextField>
        {hooks.emailValid === false && <S.ErrorMessageWrap>이메일 형식을 지켜주세요</S.ErrorMessageWrap>}
        <TextField
          id="password"
          name="password"
          type="password"
          value={hooks.LoginData.password}
          functions="password"
          onchange={hooks.handleLoginChange}
          labelStyle={{ top: "49%" }}
        >
          비밀번호
        </TextField>
        {hooks.pwValid === false && <S.ErrorMessageWrap>비밀번호 형식을 지켜주세요</S.ErrorMessageWrap>}
        <div style={{ width: "100%", marginLeft: "8vw" }}>
          <S.KeepLoginWrap>
            <S.KeepLoginBtn type="checkbox" />
            <S.Span style={{ marginTop: "3px" }}>로그인 유지</S.Span>
          </S.KeepLoginWrap>
        </div>
        <S.LoginButton onClick={hooks.handleConfirmButton}>로그인</S.LoginButton>
        <S.LoginUtilsWrap>
          <S.Span>회원가입</S.Span>
          <S.FindWrap>
            <S.Span>아이디 찾기</S.Span>
            <S.Line></S.Line>
            <S.Span>비밀번호 찾기</S.Span>
          </S.FindWrap>
        </S.LoginUtilsWrap>
      </S.LoginWrap>
    </S.Main>
  );
};

export default Login;
