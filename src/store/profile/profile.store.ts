import { atom } from "recoil";

export const ProfileId = atom<number>({
  key: "profileId",
  default: 0,
});

export const IsFirst = atom<boolean>({
  key: "isFirst",
  default: false,
})

export const IsLocation = atom<string>({
  key: "isLocation",
  default: "first",
});


export const ProfessorCheck = atom<boolean>({
  key: "isProfessorCheck",
  default:false,
})


export const ModalCheck = atom<boolean>({
  key: "isModalCheck",
  default: false
})