import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ProfessorListPageAtom = atom<number>({
  key: "professorListPageAtom",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const PostIdAtom = atom<number>({
  key: "postIdAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

