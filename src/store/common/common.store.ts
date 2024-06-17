import { atom } from "recoil";

export const ErrorStateAtom = atom<Record<string, string>>({
  key: "ErrorStateAtom",
  default: {},
});