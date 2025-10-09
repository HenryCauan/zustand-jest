import { useState } from "react";
import { useTask } from "./useTask/useTask";

const Task = () => {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (input.trim() === "") {
      console.log("Error");
      return;
    }
    addTask(input);
    setInput("");
  };
  const { user, task, addTask, delTask, editTask } = useTask();
  return (
    <>
      {user === "Guest" ? (
        <main className="w-full h-[90vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">You neeed Login in</h1>
        </main>
      ) : (
        <main className="w-full h-screen flex flex-col items-center justify-center p-12 gap-4">
          <h1 className="text-5xl">Task to Today</h1>
          <p>numeros de task : {task.length}</p>
          <input
            className="w-full max-w-1/2 px-4 py-2 border border-white"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ul className="flex flex-col items-center gap-1">
            {task.map((item) => (
              <li className="flex items-center gap-4" key={item.id}>
                • {item.text}
                <div className="flex">
                  <button onClick={() => delTask(item.id)}>del</button>
                  <button
                    onClick={() =>
                      editTask(
                        item.id,
                        prompt("Novo nome da tarefa:", item.text) || item.text
                      )
                    }
                  >
                    edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="max-w-1/2 text-2xl py-2 text-center w-full"
          >
            Add a Task
          </button>
        </main>
      )}
    </>
  );
};

export default Task;
