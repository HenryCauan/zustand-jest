import { create } from "zustand";

interface Couting {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = create<Couting>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1})),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));