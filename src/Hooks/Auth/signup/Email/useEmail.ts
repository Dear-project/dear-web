import React, { useCallback, useState } from "react";
import { showToast } from "src/Libs/Swal/Swal";
import { SignupEmailProps } from "src/types/Auth/auth.type";
import config from "src/config/config.json";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { EmailProps } from "src/store/Auth/signup/signup.store";

const useEmail = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useRecoilState<SignupEmailProps>(EmailProps);
  const [verifyNum, setVerifyNum] = useState<string>("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
      console.log([name], value);
    },
    [setSignupData],
  );

  const handleSendVerifyNum = async () => {
    try {
      await axios.post(`${config.serverUrl}/auth/email?email=${signupData.email}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReSendAuthCode = async () => {
    try {
      await axios.post(`${config.serverUrl}`);
    } catch (error) {}
  };

  const handleCheckVerifyNum = async () => {
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
    console.log(signupData.email);
  };

  return {
    isVerified,
    verifyNum,
    signupData,
    setVerifyNum,
    handleSendVerifyNum,
    handleSignupChange,
    handleReSendAuthCode,
    onNext,
    handleCheckVerifyNum,
  };
};

export default useEmail;
