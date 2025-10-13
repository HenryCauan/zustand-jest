import { create } from "zustand";
import { persist } from "zustand/middleware";

type useItems = {
  items:  Array<{ id: number; name: string; price: number; quantity: number }>;
  removerItem: (id: number) => void;
  addItem: (text: string, price: number, quantity: number) => void;
}

export const useCart = create(
  persist<useItems>(
    (set) => ({
      items: [
      ],
      removerItem: (id) => {
        set((state) => ({ items: state.items.filter(item => item.id !== id) }))
      },
      addItem: (text, price, quantity) => {
        set((state) => ({ 
          items: [...state.items, { 
            id: state.items.length > 0 ? Math.max(...state.items.map(item => item.id)) + 1 : 1, 
            name: text, 
            price: price, 
            quantity: quantity 
          }] 
        }))
      },
    }),
    {
      name: "task-storage", // nome da chave no localStorage
    }
  )
);