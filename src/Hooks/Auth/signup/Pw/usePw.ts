"use client";

import React, { useCallback, useEffect, useState } from "react";
import { SignupPwProps } from "src/types/Auth/auth.type";

const usePw = () => {
  const [pwValid, setPwValid] = useState<boolean>();
  const [pwAllow, setPwAllow] = useState<boolean>();
  const [toInfo, setToInfo] = useState<boolean>();
  const [signupData, setSignupData] = useState<SignupPwProps>({
    pw: "",
    checkPw: "",
  });

  // const handleChagnePw = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPw(e.target.value);
  //   const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  //   if (pwRegex.test(e.target.value) || e.target.value === "") {
  //     setPwValid(true);
  //   } else {
  //     setPwValid(false);
  //   }
  // };

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleConfirmButton = () => {
    if (signupData.pw === signupData.checkPw) {
      setPwAllow(true);
    } else {
      setPwAllow(false);
    }

    if (pwAllow) {
      setToInfo(true);
    } else {
      setToInfo(false);
    }
  };

  return {
    pwValid,
    pwAllow,
    toInfo,
    signupData,
    // handleChagnePw,
    handleSignupChange,
    handleConfirmButton,
  };
};

export default usePw;
