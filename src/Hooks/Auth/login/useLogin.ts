"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import { showToast } from "src/libs/Swal/Swal";
import token from "src/libs/token/token";
import { ErrorStateAtom } from "src/store/common/common.store";
import { LoginParam, LoginResponse } from "src/types/Auth/auth.type";
import patternCheck from "src/util/check/patternCheck";

const useLogin = () => {
  const [LoginData, setLoginData] = useState<LoginParam>({
    userId: "",
    password: "",
  });
  const [errorState, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      const { userId, password } = LoginData;
      if (name === "userId") {
        if (!patternCheck.useridCheck(userId)) {
          setErrorState({
            ...errorState,
            userId: "아이디를 정확히 입력해주세요",
          });
        }
      } else {
        if (!patternCheck.passwordCheck(password)) {
          setErrorState({
            ...errorState,
            password: "비밀번호를 정확히 입력해주세요.",
          });
        }
      }
      setLoginData((prev) => ({ ...prev, [name]: value }));
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
      setErrorState({
        ...errorState,
        password: "아이디 및 비밀번호를 확인해주세요.",
      });
    }
  };

  return {
    LoginData,
    handleLoginChange,
    handleConfirmButton,
  };
};

export default useLogin;
