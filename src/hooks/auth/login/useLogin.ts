"use client";
import dearToast from "@/libs/Swal/Swal";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "@/libs/token/tokens";
import { ErrorStateAtom } from "src/store/common/common.store";
import { LoginParam, LoginResponse } from "src/types/auth/auth.type";
import { usePostLoginMutation } from "@/queries/auth/auth.query";

const useLogin = () => {
  const router = useRouter();
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

  const postLoginMutation = usePostLoginMutation();

  const handleConfirmButton = async () => {
    postLoginMutation.mutate(
      {
        email: LoginData.userId,
        password: LoginData.password,
      },
      {
        onSuccess: (res) => {
          token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
          dearToast.sucessToast("로그인 성공");
          router.push("/");
        },
        onError: () => {
          dearToast.errorToast("로그인 실패");
        },
      },
    );
  };

  return {
    LoginData,
    handleLoginChange,
    handleConfirmButton,
  };
};

export default useLogin;
