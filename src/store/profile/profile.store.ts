import { atom } from "recoil";

export const ProfileId = atom<number>({
  key: "profileId",
  default: 0,
});

export const IsFirst = atom<boolean>({
  key: "isFirst",
  default: false,
});
