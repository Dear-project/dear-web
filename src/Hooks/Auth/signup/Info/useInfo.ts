import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { showToast } from "src/libs/Swal/Swal";
import { SignupInfoProps } from "src/types/Auth/auth.type";

const useInfo = () => {
  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [signupData, setSignupData] = useState<SignupInfoProps>({
    name: "",
    birthday: "",
  });

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const handleConfirmButton = () => {
    showToast("success", "회원가입 완료");

    console.log(name, birthday);
  };

  return {
    name,
    birthday,
    signupData,
    handleSignupData,
    handleConfirmButton,
  };
};

export default useInfo;
