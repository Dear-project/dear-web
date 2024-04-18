import { atom } from "recoil";
import { SignupEmailProps, SignupInfoProps, SignupPwProps } from "src/types/Auth/auth.type";

export const EmailProps = atom<SignupEmailProps>({
  key: "EmailProps",
  default: { email: "", verifyNum: "" },
});

export const PwProps = atom<SignupPwProps>({
  key: "PwProps",
  default: { pw: "", checkPw: "" },
});

export const InfoProps = atom<SignupInfoProps>({
  key: "InfoProps",
  default: { name: "", birthday: "", type: "" },
});
