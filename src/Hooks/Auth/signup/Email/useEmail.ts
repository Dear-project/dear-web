"use client";

import React, { useCallback, useEffect, useState } from "react";
import { showToast } from "src/Libs/Swal/Swal";
import { SignupEmailProps } from "src/Types/Auth/auth.type";
import config from "src/Config/config.json";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { EmailProps } from "src/Store/Auth/signup/signup.store";

const useEmail = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useRecoilState<SignupEmailProps>(EmailProps);
  const [verifyNum, setVerifyNum] = useState<string>("");
  const [isVerified, setIsVerified] = useState(false);
  const [resend, setResend] = useState(false);
  const [timer, setTimer] = useState<number>(300);
  const [timerInstance, setTimerinstane] = useState<any>(null);
  const [next, setNext] = useState(false);

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
      console.log([name], value);
    },
    [setSignupData],
  );

  const handleSendAuthCode = async () => {
    try {
      await axios.post(`${config.serverUrl}/auth/email?email=${signupData.email}`).then(() => {
        setResend(true);
        startTimer();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const startTimer = () => {
    const instance = setTimeout(() => {
      setTimer((prevTime) => prevTime - 1);
      console.log(timer);
    }, 1000);
    setTimerinstane(instance);
  };

  useEffect(() => {
    if (timer === 0) {
      clearTimeout(timerInstance);
      setResend(false);
    }
  }, [timer, timerInstance]);

  useEffect(() => {
    return () => {
      clearTimeout(timerInstance);
    };
  }, [timerInstance]);

  const handleReSendAuthCode = async () => {
    try {
      await axios.post(`${config.serverUrl}/auth/emailresend?email=${signupData.email}`).then(() => {});
    } catch (error) {}
  };

  const handleCheckAuth = async () => {
    try {
      await axios
        .get(`${config.serverUrl}/auth/email/verifications?email=${signupData.email}&authCode=${signupData.verifyNum}`)
        .then(() => {
          showToast("success", "세욱세욱");
          setIsVerified(true);
        });
    } catch (error) {
      showToast("error", "서버 연결 오류");
    }
  };

  const onNext = () => {
    setNext((prev) => !prev);
  };

  return {
    isVerified,
    verifyNum,
    signupData,
    resend,
    next,
    setVerifyNum,
    handleSendAuthCode,
    handleSignupChange,
    handleReSendAuthCode,
    onNext,
    handleCheckAuth,
  };
};

export default useEmail;
