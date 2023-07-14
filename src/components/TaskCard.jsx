import React from "react";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div>
      <h1>{task.tittle}</h1>
      <p>{task.description}</p>
      <p>{task.id}</p>
      <button onClick={() => {deleteTask(task.id)}}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
