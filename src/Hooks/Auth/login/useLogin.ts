"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import config from "src/Config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/Constants/token/token.constants";
import { showToast } from "src/Libs/Swal/Swal";
import token from "src/Libs/token/token";
import { LoginParam, LoginResponse } from "src/Types/Auth/auth.type";

const useLogin = () => {
  const [emailValid, setEmailValid] = useState<boolean>();
  const [pwValid, setPwValid] = useState<boolean>();
  const [isConfirm, setIsConfirm] = useState(false);
  const [LoginData, setLoginData] = useState<LoginParam>({
    userId: "",
    password: "",
  });

  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
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
          showToast("success", "로그인 성공");
        });
    } catch (e) {
      showToast("error", "로그인 실패");
    }
  };

  return {
    LoginData,
    emailValid,
    pwValid,
    isConfirm,
    handleLoginChange,
    handleConfirmButton,
  };
};

export default useLogin;
