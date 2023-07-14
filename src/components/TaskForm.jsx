import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext) 

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={tittle}
          autoFocus
        ></input>
        <textarea
          placeholder="Escribe la descripccion de la tarea aqui"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;





