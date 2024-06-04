import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { PasswordAtom } from "src/Stores/Auth/signup/signup.store";
import { useRouter } from "next/navigation";
import patternCheck from "src/Utils/check/patternCheck";
import { ErrorStateAtom } from "src/Stores/common/common.store";

const usePassword = () => {
  const router = useRouter();
  const [passwordData, setPasswordData] = useRecoilState(PasswordAtom);
  const [errorState, setErrorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);

  const handleDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPasswordData((prev) => ({ ...prev, [name]: value }));
    },
    [setPasswordData],
  );

  const onCheckPw = () => {
    const { pw, checkPw } = passwordData;

    if (pw === checkPw) {
      router.replace("/signup/info");
    }
  };

  const onCheckData = () => {
    const { pw } = passwordData;

    if (!patternCheck.passwordCheck(pw)) {
      setErrorState({
        ...errorState,
        pw: "비밀번호 형식을 지켜주세요.",
      });
    }
  };

  return {
    passwordData,
    handleDataChange,
    onCheckPw,
    onCheckData,
  };
};

export default usePassword;
