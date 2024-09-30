import { atom } from "recoil";

export const ProfileId = atom<number>({
  key: "profileId",
  default: 0,
});

interface IsFirstType {
  isSchool: boolean;
  isMajor: boolean;
}

export const IsFirst = atom<IsFirstType>({
  key: "isFirst",
  default: { isSchool: false, isMajor: false },
});
