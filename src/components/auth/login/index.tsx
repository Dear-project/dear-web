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
        <S.LoginBox>
        <S.DearLogo>DEAR.</S.DearLogo>
        <S.InputBox>
        <TextField
          id="userId"
          name="userId"
          value={hooks.LoginData.userId}
          functions="userId"
          onchange={hooks.handleLoginChange}
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
        </S.InputBox>
        <S.LoginButton onClick={hooks.handleConfirmButton}>로그인</S.LoginButton>
        <S.LoginUtilsWrap>
          <S.Span
          style={{paddingLeft:"20px"}}
            onClick={() => {
              router.push("/signup/email");
              setErrorState({});
            }}
          >
            회원가입
          </S.Span>
        </S.LoginUtilsWrap>
        </S.LoginBox>
      </S.LoginWrap>
    </S.Main>
  );
};

export default Login;
