"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/Constants/token/token.constants";
import { showToast } from "src/Libs/Swal/Swal";
import token from "src/Libs/token/token";
import { LoginErrorState, LoginParam, LoginResponse } from "src/Types/Auth/auth.type";
import patternCheck from "src/Util/check/patternCheck";

const useLogin = () => {
  const [LoginData, setLoginData] = useState<LoginParam>({
    userId: "",
    password: "",
  });

  const [errorState, setErrorState] = useState<LoginErrorState>({
    userId: "",
    password: "",
  });

  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      const { userId, password } = LoginData;
      setLoginData((prev) => ({ ...prev, [name]: value }));
      if (!patternCheck.useridCheck(userId)) {
        setErrorState({
          ...errorState,
          userId: "올바른 이메일을 입력해주세요.",
        });
      }
      if (!patternCheck.passwordCheck(password)) {
        setErrorState({
          ...errorState,
          password: "비밀번호 형식을 지켜주세요.",
        });
      }
    },
    [setLoginData],
  );

  const handleConfirmButton = async () => {
    try {
      await axios
        .post<LoginResponse>(`${config.serverUrl}/auth`, {
          email: LoginData.userId,
          password: LoginData.password,
        })
        .then((res) => {
          token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
        });
    } catch (e) {
      showToast("error", "로그인 실패");
    }
  };

  return {
    LoginData,
    errorState,
    handleLoginChange,
    handleConfirmButton,
  };
};

export default useLogin;
