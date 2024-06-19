import create from "zustand";

interface SidebarState {
  selectedItem: string;
  setSelectedItem: (newState: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  selectedItem: "",
  setSelectedItem: (newState) => {
    set(() => ({ selectedItem: newState }));
  },
}));
