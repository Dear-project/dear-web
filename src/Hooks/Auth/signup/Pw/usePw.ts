"use client";

import React, { useEffect, useState } from "react";

const usePw = () => {
  const [pw, setPw] = useState<string>("");
  const [pwValid, setPwValid] = useState<boolean>();
  const [checkPw, setCheckPw] = useState<string>("");
  const [pwAllow, setPwAllow] = useState<boolean>();
  const [toInfo, setToInfo] = useState<boolean>();

  const handleChagnePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (pwRegex.test(e.target.value) || e.target.value === "") {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleConfirmButton = () => {
    if (pw === checkPw) {
      setPwAllow(true);
    } else {
      setPwAllow(false);
    }

    if (pwAllow) {
      setToInfo(true);
    } else {
      setToInfo(false);
    }
    console.log(pw, checkPw);
  };

  return {
    pw,
    pwValid,
    checkPw,
    pwAllow,
    toInfo,
    setCheckPw,
    handleChagnePw,
    handleConfirmButton,
  };
};

export default usePw;
