import { create } from "zustand";

interface Couting {
  count: number;
  increment?: () => void;
  decrement?: () => void; // Adicione ? aqui também
}

export const useCount = create<Couting>((set) => ({
  count: 0,
  increment: () => {
    console.log('increment');
    set((state) => ({ count: state.count + 1}));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));