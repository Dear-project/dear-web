"use client";
import React, { useEffect, useState } from "react";
import { showToast } from "src/libs/Swal/Swal";

const useLogin = () => {
  const [email, setEmail] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [emailValid, setEmailValid] = useState<boolean>();
  const [pwValid, setPwValid] = useState<boolean>();
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (emailValid && pwValid) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [emailValid, pwValid]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}/;
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value) || e.target.value === "") {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    setPw(e.target.value);
    if (pwRegex.test(e.target.value) || e.target.value === "") {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleConfirmButton = () => {
    if (isConfirm) {
      window.location.replace("/main");
      showToast("success", "로그인 성공");
    } else {
      showToast("error", "로그인 실패");
    }
  };

  return {
    email,
    pw,
    emailValid,
    pwValid,
    isConfirm,
    handleChangeEmail,
    handleChangePw,
    handleConfirmButton,
  };
};

export default useLogin;
