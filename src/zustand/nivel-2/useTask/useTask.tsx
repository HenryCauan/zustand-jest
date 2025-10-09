import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskState {
  task: Array<{ id: number; text: string }>;
  user: "Logged in" | "Guest" | null;
  changeToggle: (text: string) => void;
  addTask: (text: string) => void;
  delTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
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
      user: "Guest",
      changeToggle: (text) => {
        console.log("changeToggle foi acionado");
        set(() => {
          if (text === "Guest") return { user: "Guest" };
          if (text === "Logged in") return { user: "Logged in" };
          return { user: null };
        });
      },
      addTask: (text: string) => {
        set((state) => ({
          task: [...state.task, { id: Date.now(), text: text }],
        }));
        console.log(`task '${text}' foi adicionada com sucess`);
      },
      delTask: (id: number) => {
        set((state) => ({
          task: [...state.task.filter((elem) => elem.id !== id)],
        }));
        console.log(`elemento ${id} foi deletado`);
      },
      editTask: (id: number, text: string) =>
        set((state) => ({
          task: state.task.map((task) =>
            task.id === id ? { ...task, text: text } : task
          ),
        })),
    }),
    // Para que serve:
    // Identificação: Cada aplicação/componente pode ter sua própria chave no localStorage
    // Organização: Evita conflitos entre diferentes stores da sua aplicação
    // Isolamento: Se você tiver múltiplas stores, cada uma terá sua chave separada
    {
      name: "task-storage", // nome da chave no localStorage
    }
  )
);
