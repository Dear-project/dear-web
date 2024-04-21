"use client";

import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { PwProps } from "src/Store/Auth/signup/signup.store";

const usePw = () => {
  const [pwValid, setPwValid] = useState<boolean>();
  const [pwAllow, setPwAllow] = useState<boolean>();
  const [toInfo, setToInfo] = useState<boolean>();
  const [signupData, setSignupData] = useRecoilState(PwProps);
  const [next, setNext] = useState(false);

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleConfirmButton = () => {
    setNext((prev) => !prev);
  };

  return {
    pwValid,
    pwAllow,
    toInfo,
    signupData,
    next,
    handleSignupChange,
    handleConfirmButton,
  };
};

export default usePw;
