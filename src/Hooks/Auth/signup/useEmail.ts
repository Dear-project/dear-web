import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { EmailAtom } from "src/Stores/Auth/signup/signup.store";
import { ErrorStateAtom } from "src/Stores/common/common.store";
import patternCheck from "src/Utils/check/patternCheck";
import CONFIG from "src/config/config.json";
import { showToast } from "src/Lib/Swal/Swal";
import { useRouter } from "next/navigation";

const useEmail = () => {
  const router = useRouter();
  const [emailData, setEmailData] = useRecoilState(EmailAtom);
  const [errorState, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
  const [resend, setResend] = useState(false);
  const [timeReamining, setTimeRemaining] = useState(0);
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
        showToast("success", "가입 가능한 이메일입니다.");
        setResend(false);
      });
    } catch (error) {
      showToast("error", "사용 불가한 이메일입니다.");
    }

    if (resend === false) {
      try {
        await axios.post(`${CONFIG.serverUrl}/auth/email?email=${email}`).then(() => {
          startTimer();
          setResend(true);
          showToast("success", "인증번호 요청 성공~!");
        });
      } catch (error) {
        showToast("error", "인증번호 요청 실패");
      }
    } else {
      try {
        await axios.post(`${CONFIG.serverUrl}/auth/emailresend?email=${email}`).then(() => {
          startTimer();
        });
      } catch (error) {
        showToast("error", "인증번호 재전송 실패");
      }
    }
  };

  const onCheckAuthCode = async () => {
    const { email, authCode } = emailData;
    try {
      await axios.get(`${CONFIG.serverUrl}/auth/email/verifications?email=${email}&authCode=${authCode}`).then(() => {
        showToast("success", "이메일 인증 성공!");
        router.push("/signup/password");
      });
    } catch (error) {
      showToast("error", "이메일 인증 실패");
    }
  };

  const startTimer = () => {
    setTimeRemaining(300);
    setTimeActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeActive && timeReamining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeReamining === 0) {
      setTimeActive(false);
    }

    return () => clearInterval(interval);
  }, [timeActive, timeReamining]);

  const formmatedTime = new Date(timeReamining * 1000).toString().substr(5, 14);

  return {
    emailData,
    resend,
    handleDataChange,
    onCheckData,
    onAuthCode,
    onCheckAuthCode,
    formmatedTime,
  };
};

export default useEmail;
