import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const { persistAtom } = recoilPersist();

export const ProfessorListPageAtom = atom<number>({
  key: "professorListPageAtom",
  default: 1,
});

export const PostIdAtom = atom<number>({
  key: "postIdAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

interface PostIdStore {
  postId: number;
  setPostId: (state: number) => void;
}

export const usePostIdStore = create<PostIdStore>((set) => ({
  postId: 0,
  setPostId: (state: number) => set({ postId: state }),
}));
