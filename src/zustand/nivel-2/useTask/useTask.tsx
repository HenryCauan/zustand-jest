import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskState {
  task: Array<{ id: number; text: string }>;
  addTask: (text: string) => void;
  delTask: (id: number) => void;
  editTask: (text: string,id: number) => void;
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
      },
      editTask: (text: string, id: number) => {
        set((state) => ({
          task: [...state.task, ]
        }));
      }
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
