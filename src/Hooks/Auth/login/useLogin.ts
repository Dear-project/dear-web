"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { showToast } from "src/Libs/Swal/Swal";
import { LoginParam } from "src/types/Auth/auth.type";
import config from "src/config/config.json";

const useLogin = () => {
  const [emailValid, setEmailValid] = useState<boolean>();
  const [pwValid, setPwValid] = useState<boolean>();
  const [isConfirm, setIsConfirm] = useState(false);
  const [LoginData, setLoginData] = useState<LoginParam>({
    userId: "",
    password: "",
  });

  useEffect(() => {
    if (emailValid && pwValid) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [emailValid, pwValid]);

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
        .post(`${config.serverUrl}/auth`, {
          email: LoginData.userId,
          password: LoginData.password,
        })
        .then(() => {
          showToast("success", "로그인 성공!");
        });
    } catch (error) {}
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
