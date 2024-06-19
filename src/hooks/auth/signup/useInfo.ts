import axios from "axios";
import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { EmailAtom, PasswordAtom } from "src/store/auth/signup/signup.store";
import { InfoProps } from "@/types/Auth/sign.type";
import CONFIG from "src/config/config.json";
import DearToast from "src/libs/Swal/Swal";
import { useRouter } from "next/navigation";

const useInfo = () => {
  const router = useRouter();
  const [infoData, setInfoData] = useState<InfoProps>({
    name: "",
    birthday: "",
    type: "",
  });
  const email = useRecoilValue(EmailAtom);
  const password = useRecoilValue(PasswordAtom);

  const hanldeDataChnage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInfoData((prev) => ({ ...prev, [name]: value }));
    },
    [setInfoData],
  );

  const onSignup = async () => {
    try {
      await axios
        .post(`${CONFIG.serverUrl}/auth/signup`, {
          email: email.email,
          password: password.pw,
          name: infoData.name,
          birthDay: infoData.birthday,
          type: infoData.type,
        })
        .then(() => {
          DearToast.sucessToast("로그인 성공");
          router.push("/login");
        });
    } catch (error) {
      DearToast.errorToast("회원가입 실패");
    }
  };

  return {
    infoData,
    hanldeDataChnage,
    onSignup,
  };
};

export default useInfo;
