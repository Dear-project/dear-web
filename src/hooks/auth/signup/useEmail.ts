import axios, { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { EmailAtom } from "src/store/auth/signup/signup.store";
import { ErrorStateAtom } from "src/store/common/common.store";
import patternCheck from "src/utils/check/patternCheck";
import CONFIG from "src/config/config.json";
import DearToast from "src/libs/Swal/Swal";
import { useRouter } from "next/navigation";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";

const useEmail = () => {
  const router = useRouter();
  const [emailData, setEmailData] = useRecoilState(EmailAtom);
  const [errorState, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
  const [resend, setResend] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeActive, setTimeActive] = useState<boolean>();

  const handleDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEmailData((prev) => ({ ...prev, [name]: value }));
    },
    [emailData],
  );

  const onCheckData = () => {
    const { email } = emailData;
    if (!patternCheck.useridCheck(email)) {
      setErrorState({
        ...errorState,
        email: "",
      });
    }
  };

  const onAuthCode = async () => {
    const { email } = emailData;
    try {
      await axios.get(`${CONFIG.serverUrl}/auth/${email}/duplicate`).then(() => {
        setResend(false);
      });
    } catch (error) {
      DearToast.errorToast(ErrorTransform((error as AxiosError).status!));
    }

    if (resend === false) {
      try {
        await axios.post(`${CONFIG.serverUrl}/auth/email?email=${email}`).then(() => {
          startTimer();
          setResend(true);
          DearToast.sucessToast("인증번호 요청 성공");
        });
      } catch (error) {
        DearToast.errorToast(ErrorTransform((error as AxiosError).status!));
      }
    } else {
      try {
        await axios.post(`${CONFIG.serverUrl}/auth/emailresend?email=${email}`).then(() => {
          startTimer();
        });
      } catch (error) {
        DearToast.errorToast(ErrorTransform((error as AxiosError).status!));
      }
    }
  };

  const onCheckAuthCode = async () => {
    const { email, authCode } = emailData;
    try {
      await axios.get(`${CONFIG.serverUrl}/auth/email/verifications?email=${email}&authCode=${authCode}`).then(() => {
        DearToast.sucessToast("이메일 인증 성공!");
        router.push("/signup/password");
      });
    } catch (error) {
      DearToast.errorToast(ErrorTransform((error as AxiosError).status!));
    }
  };

  const startTimer = () => {
    setTimeRemaining(300);
    setTimeActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimeActive(false);
    }
    return () => clearInterval(interval);
  }, [timeActive, timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return {
    emailData,
    resend,
    handleDataChange,
    onCheckData,
    onAuthCode,
    onCheckAuthCode,
    formattedTime,
  };
};

export default useEmail;
