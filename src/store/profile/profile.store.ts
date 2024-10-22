import { MajorChangeParams, SchoolChangeParams } from "@/repositories/profile/ProfileRepository";
import { UserProfile } from "@/types/profile/profile.type";
import { atom } from "recoil";

export const ProfileId = atom<number>({
  key: "profileId",
  default: 0,
});

export const IsFirst = atom<boolean>({
  key: "isFirst",
  default: false,
});

export const IsLocation = atom<string>({
  key: "isLocation",
  default: "first",
});

export const ProfessorCheck = atom<boolean>({
  key: "isProfessorCheck",
  default: false,
});

export const ModalCheck = atom<boolean>({
  key: "isModalCheck",
  default: false,
});

export const ProfileAtom = atom<UserProfile | undefined>({
  key: "isProfileData",
  default: undefined,
});

export const ChangeSchoolAtom = atom<SchoolChangeParams>({
  key: "ChangeSchoolAtom",
  default: { seq: "", schoolName: "", link: "", adres: "" },
});

export const ChangeMajorAtom = atom<MajorChangeParams>({
  key: "ChangeMajorAtom",
  default: { majorSeq: "", lclass: "", mclass: "" },
});
