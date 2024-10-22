import { atom } from "recoil";
import { EmailProps, InfoProps, PasswordProps } from "@/types/auth/sign.type";

export const EmailAtom = atom<EmailProps>({
  key: "EmailAtom",
  default: { email: "", authCode: "" },
});

export const PasswordAtom = atom<PasswordProps>({
  key: "PasswordAtom",
  default: { pw: "", checkPw: "" },
});

export const InfoAtom = atom<InfoProps>({
  key: "InfoAtom",
  default: { name: "", birthday: "", type: "" },
});
