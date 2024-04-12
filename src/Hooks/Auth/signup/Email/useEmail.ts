"use client";
import React, { useCallback, useState } from "react";
import { showToast } from "src/libs/Swal/Swal";

interface SignupEmailProps {
  email: string;
  verifyNum: string;
}

const useEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [verifyNum, setVerifyNum] = useState<string>("");
  const [sendVerify, setSendVerify] = useState<boolean>();
  const [isVerified, setIsVerified] = useState(false);
  const [signupData, setSignupData] = useState<SignupEmailProps>({
    email: "",
    verifyNum: "",
  });

  // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}/;
  //   setEmail(e.target.value);
  //   if (emailRegex.test(e.target.value) || e.target.value === "") {
  //     setEmailValid(true);
  //   } else {
  //     setEmailValid(false);
  //   }
  // };

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleCheckVerifyNum = () => {
    const VerifyNum = "123456";
    if (signupData.verifyNum === VerifyNum) {
      setIsVerified(true);
      showToast("success", "인증완료");
    } else {
      setIsVerified(false);
    }
    // console.log(isVerified);
  };

  const handleConfirmButton = () => {};

  return {
    email,
    sendVerify,
    isVerified,
    verifyNum,
    signupData,
    setVerifyNum,
    handleSignupChange,
    handleConfirmButton,
    handleCheckVerifyNum,
  };
};

export default useEmail;
