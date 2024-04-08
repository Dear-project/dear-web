"use client";
import React, { useState } from "react";
import { showToast } from "src/libs/Swal/Swal";

const useEmail = () => {
  const [email, setEmail] = useState<string>();
  const [emailValid, setEmailValid] = useState<boolean>();
  const [verifyNum, setVerifyNum] = useState<string>();
  const [sendVerify, setSendVerify] = useState<boolean>();
  const [isVerified, setIsVerified] = useState(false);
  const [toSettingPw, setToSettingPw] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}/;
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value) || e.target.value === "") {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleCheckVerifyNum = () => {
    const VerifyNum = 123456;
    if (verifyNum == VerifyNum.toString()) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const handleConfirmButton = () => {
    if (isVerified === false) {
      if (emailValid) {
        setSendVerify(true);
      } else {
        setSendVerify(false);
      }
    } else {
      setToSettingPw(true);
    }
  };

  return {
    email,
    emailValid,
    sendVerify,
    isVerified,
    verifyNum,
    setVerifyNum,
    handleChangeEmail,
    handleConfirmButton,
    handleCheckVerifyNum,
  };
};

export default useEmail;
