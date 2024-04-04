import React from "react";
import * as S from "./style";
import useLogin from "src/Hooks/Auth/login/useLogin";

const Login = () => {
  const { ...hooks } = useLogin();

  return (
    <S.Main>
      <S.LoginWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.Input placeholder="이메일" type="email" onChange={hooks.handleChangeEmail} value={hooks.email} />
        {hooks.emailValid === false && <S.ErrorMessageWrap>이메일 형식을 지켜주세요</S.ErrorMessageWrap>}
        <S.Input
          placeholder="비밀번호"
          style={{ marginTop: "-2vh" }}
          type="password"
          onChange={hooks.handleChangePw}
          value={hooks.pw}
        />
        {hooks.pwValid === false && <S.ErrorMessageWrap>비밀번호 형식을 지켜주세요</S.ErrorMessageWrap>}
        <div style={{ width: "100%", marginLeft: "8vw" }}>
          <S.KeepLoginWrap>
            <S.KeepLoginBtn type="checkbox" />
            <S.Span>로그인 유지</S.Span>
          </S.KeepLoginWrap>
        </div>
        <S.LoginButton onClick={hooks.handleConfirmButton} disabled={!hooks.isConfirm}>
          로그인
        </S.LoginButton>
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
