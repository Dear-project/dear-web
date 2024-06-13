import { atom } from "recoil";

export const ProfessorListPageAtom = atom<number>({
  key: "professorListAtom",
  default: 1,
});
