"use client";

import React from "react";
import * as S from "./style";
import useLogin from "src/hooks/auth/login/useLogin";
import TextField from "src/components/common/textField";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { ErrorStateAtom } from "src/store/common/common.store";

const Login = () => {
  const { ...hooks } = useLogin();
  const router = useRouter();
  const [, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
  return (
    <S.Main>
      <S.LoginWrap>
        <S.DearLogo>DEAR.</S.DearLogo>
        <TextField
          id="userId"
          name="userId"
          value={hooks.LoginData.userId}
          functions="userId"
          onchange={hooks.handleLoginChange}
          labelStyle={{ top: "37%" }}
          type="email"
        >
          이메일
        </TextField>
        <TextField
          id="password"
          name="password"
          type="password"
          value={hooks.LoginData.password}
          functions={hooks.handleConfirmButton}
          onchange={hooks.handleLoginChange}
          labelStyle={{ top: "49%" }}
        >
          비밀번호
        </TextField>
        <div style={{ width: "100%", marginLeft: "8vw" }}>
          <S.KeepLoginWrap>
            <S.KeepLoginBtn type="checkbox" />
            <S.Span style={{ marginTop: "3px" }}>로그인 유지</S.Span>
          </S.KeepLoginWrap>
        </div>
        <S.LoginButton onClick={hooks.handleConfirmButton}>로그인</S.LoginButton>
        <S.LoginUtilsWrap>
          <S.Span
            onClick={() => {
              router.push("/signup/email");
              setErrorState({});
            }}
          >
            회원가입
          </S.Span>
          <S.FindWrap>
            <S.Span onClick={() => router.push("/auth/find-id")}>아이디 찾기</S.Span>
            <S.Line />
            <S.Span onClick={() => router.push("/auth/find-pw")}>비밀번호 찾기</S.Span>
          </S.FindWrap>
        </S.LoginUtilsWrap>
      </S.LoginWrap>
    </S.Main>
  );
};

export default Login;