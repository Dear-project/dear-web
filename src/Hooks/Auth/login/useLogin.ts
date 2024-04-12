"use client";
import React, { useCallback, useEffect, useState } from "react";
import { showToast } from "src/libs/Swal/Swal";

const Dummy = {
  email: "chan2bo2@naver.com",
  pw: "minzzang9!",
};

interface LoginParam {
  userId: string;
  password: string;
}

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

  const handleConfirmButton = () => {
    if (Dummy.email === LoginData.userId && Dummy.pw === LoginData.password) {
      showToast("success", "로그인 성공");
    } else {
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
