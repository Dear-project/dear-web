import { atom } from "recoil";

export const ProfessorListPageAtom = atom<number>({
  key: "professorListPageAtom",
  default: 1,
});
