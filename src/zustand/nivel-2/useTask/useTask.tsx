import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskState {
  task: Array<{ id: number; text: string }>;
  addTask: (text: string) => void;
  delTask: (id: number) => void;
}

export const useTask = create<TaskState>()(
  persist(
    (set) => ({
      task: [
        {
          id: Date.now(),
          text: "I need study ingles",
        },
      ],
      addTask: (text: string) => {
        set((state) => ({ task: [...state.task, { id: Date.now(), text: text }] }));
        console.log(`task '${text}' foi adicionada com sucess`);
      },
      delTask: (id: number) => {
        set((state) => ({ task: [...state.task.filter(elem => elem.id !== id)]}));
        console.log(`elemento ${id} foi deletado`);
      }
    }),
    {
      name: "task-storage", // nome da chave no localStorage
    }
  )
);
