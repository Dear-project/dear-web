"use client";
import dearToast from "@/libs/Swal/Swal";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/Constants/token/token.constants";
import token from "src/libs/token/token";
import { ErrorStateAtom } from "src/Stores/common/common.store";
import { LoginParam, LoginResponse } from "src/types/Auth/auth.type";

const useLogin = () => {
  const router = useRouter();
  const [LoginData, setLoginData] = useState<LoginParam>({
    userId: "",
    password: "",
  });
  const [errorState, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
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
          token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
          dearToast.sucessToast("로그인 성공");
          router.push("/");
        });
    } catch (e) {
      dearToast.errorToast("로그인 실패");
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
