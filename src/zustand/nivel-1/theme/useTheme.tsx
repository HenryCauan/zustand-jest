import { create } from "zustand";

type useColors = {
  color: string | null;
  themeBlack: () => void;
  themeWhite: () => void;
}

export const useTheme = create<useColors>((set) => ({
  color: null,
  themeBlack: () => {
    console.log("black");
    set({ color: "black" });
  },
  themeWhite: () => {
    console.log("white");
    set({ color: "white" });
  },
}))