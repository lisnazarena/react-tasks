import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        tittle: task.tittle,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}


// Este código es un ejemplo de un contexto de tareas en una aplicación de React. Veamos paso a paso cómo funciona:

// Importaciones: El código importa las funciones createContext, useState y useEffect de la biblioteca React. También importa un conjunto de tareas predefinidas del archivo "../data/tasks".

// Declaración del contexto: Se crea un contexto llamado TaskContext utilizando la función createContext(). Este contexto se utilizará para compartir el estado y las funciones relacionadas con las tareas entre componentes en la aplicación de React.

// Componente TaskContextProvider: Se define un componente de función llamado TaskContextProvider. Este componente actúa como el proveedor del contexto y envuelve a los componentes hijos que necesitan acceder a las tareas y sus funciones relacionadas.

// Estado y funciones relacionadas con las tareas: Dentro del componente TaskContextProvider, se utiliza el hook useState para declarar un estado llamado tasks, que inicialmente está vacío. La función setTask se utiliza para actualizar el estado de las tareas.

// createTask(task): Es una función que agrega una nueva tarea al estado actual. Se utiliza el spread operator (...tasks) para copiar las tareas existentes y luego se agrega un nuevo objeto de tarea al final con los detalles proporcionados en el parámetro task. El id se asigna como la longitud actual de las tareas, lo que garantiza que sea único.

// deleteTask(taskId): Es una función que elimina una tarea según su id. Utiliza la función filter para crear un nuevo arreglo de tareas que excluye la tarea con el id proporcionado.

// Efecto de inicialización: Se utiliza el hook useEffect para ejecutar un efecto de inicialización una vez cuando el componente TaskContextProvider se monta por primera vez. En este caso, el efecto establece las tareas iniciales utilizando el arreglo de tareas importado desde "../data/tasks".

// setTask(data): Actualiza el estado de las tareas con el valor inicial proporcionado por el arreglo de tareas importado. Este arreglo se asigna a tasks y se utilizará como estado inicial.
// Proveedor de contexto: El componente TaskContextProvider renderiza un TaskContext.Provider. Dentro del atributo value se proporciona un objeto que contiene el estado actual de las tareas (tasks), así como las funciones deleteTask y createTask para manipular las tareas.

// Renderización de componentes hijos: Los componentes hijos de TaskContextProvider se renderizan dentro del TaskContext.Provider, lo que permite que los componentes hijos accedan a los valores del contexto y utilicen las tareas y las funciones relacionadas con ellas.

// En resumen, este código define un contexto de tareas utilizando el Context API de React. Proporciona un estado de tareas, funciones para crear y eliminar tareas, y permite a los componentes hijos acceder y manipular este estado y sus funciones relacionadas.