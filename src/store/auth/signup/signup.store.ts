import { atom } from "recoil";
import { EmailProps, PasswordProps } from "src/types/Auth/sign.type";

export const EmailAtom = atom<EmailProps>({
  key: "EmailAtom",
  default: { email: "", authCode: "" },
});

export const PasswordAtom = atom<PasswordProps>({
  key: "PasswordAtom",
  default: { pw: "", checkPw: "" },
});
