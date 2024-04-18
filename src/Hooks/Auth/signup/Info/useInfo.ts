import axios from "axios";
import React, { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { showToast } from "src/libs/Swal/Swal";
import config from "src/config/config.json";
import { EmailProps, InfoProps, PwProps } from "src/store/Auth/signup/signup.store";

const useInfo = () => {
  const [signupData, setSignupData] = useRecoilState(InfoProps);
  const Email = useRecoilValue(EmailProps);
  const Pw = useRecoilValue(PwProps);

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleConfirmButton = async () => {
    try {
      await axios.post(`${config.serverUrl}/auth/signup`, {
        email: Email.email,
        password: Pw.pw,
        name: signupData.name,
        birthDay: signupData.birthday,
        type: signupData.type,
      });
      console.log(Email.email, Pw.pw, signupData.name, signupData.birthday, signupData.type);
    } catch (error) {}
  };

  return {
    signupData,
    handleSignupData,
    handleConfirmButton,
  };
};

export default useInfo;
