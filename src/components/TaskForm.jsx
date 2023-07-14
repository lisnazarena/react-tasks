import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tittle, description);
    createTask({
      tittle,
      description,
    });

    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-5 m-20 rounded-md">
        
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={tittle}
          className="bg-slate-300 p-3 w-full mb-3"
          autoFocus
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-3"
          placeholder="Escribe la descripccion de la tarea aqui"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button className="bg-indigo-800 px-3 py-1 text-white rounded-md hover:bg-indigo-600">Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;
