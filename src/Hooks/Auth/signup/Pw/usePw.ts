"use client";

import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { PwProps } from "src/Store/Auth/signup/signup.store";

const usePw = () => {
  const [pwValid, setPwValid] = useState<boolean>();
  const [pwAllow, setPwAllow] = useState<boolean>();
  const [toInfo, setToInfo] = useState<boolean>();
  const [signupData, setSignupData] = useRecoilState(PwProps);

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleConfirmButton = () => {
    // if (signupData.pw === signupData.checkPw) {
    //   setPwAllow(true);
    // } else {
    //   setPwAllow(false);
    // }

    // if (pwAllow) {
    //   setToInfo(true);
    // } else {
    //   setToInfo(false);
    // }
    console.log(signupData.pw);
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
