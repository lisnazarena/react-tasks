// import { tasks as data } from "./tasks";
// import { useEffect, useState } from "react";

// function Tasklist() {
//   const [tasks, setTask] = useState([]);

//   useEffect(() => {
//     setTask(data);
//   }, []);

//   if (tasks.length === 0) {
//     return <h1>No hay tareas pendientes</h1>;
//   }

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div key= {task.id}>
//             <h1>{task.tittle}</h1>
//             <p>{task.description}</p>
//             <p>{task.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Tasklist;

// Este código muestra una lista de tareas en un componente de React llamado Tasklist.

//En la primera línea, se importa un objeto llamado tasksdesde un archivo "./tasks".
//También se importan los ganchos useEffecty useStatede la biblioteca "react".
//El componente Tasklistdefine un estado inicial llamado tasksusando el gancho useState. El estado inicial se establece como un arreglo vacío [].

//Luego, se utiliza el gancho useEffectpara ejecutar una función después de que el componente se haya montado. En este caso, la función establece el estado tasks con los datos importados del archivo "./tasks".

//Después de eso, se realiza una verificación para determinar si el arreglo de tareas ( tasks) está vacío. Si es así, se renderiza un encabezado que indica que no hay tareas pendientes.

//Si el arreglo de tareas no está vacío, se renderiza un elemento <div>que contiene una iteración sobre cada tarea en el arreglo tasks. Para cada tarea, se renderiza un <div>con un keyúnico (en este caso, se utiliza el identificador de la tarea task.id), un encabezado <h1>con el título de la tarea task.titley un párrafo <p>con la descripción de la tarea task.description.

//Finalmente, el componente Tasklistse exporta como el valor predeterminado para que pueda ser utilizado en otros componentes de React.

//--------------------------------------------------------
// Lo modificamos para pasar el arreglo de tareas a App.jsx, entonces el codigo quedaria:

// function Tasklist({tasks}) {
//   if (tasks.length === 0) {
//     return <h1>No hay tareas pendientes</h1>;
//   }

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div key={task.id}>
//           <h1>{task.tittle}</h1>
//           <p>{task.description}</p>
//           <p>{task.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Tasklist;

//Este código define un componente de React llamado Tasklistque recibe un arreglo de tareas ( tasks) como prop. El componente renderiza una lista de tareas en formato de encabezado y párrafos.

//Aquí está el flujo del código:

//La función Tasklisttoma un objeto desestructurado como argumento, y dentro de ese objeto se espera una propiedad llamada tasksque es un arreglo.

//Luego, el código verifica si el arreglo tasksestá vacío mediante la condición tasks.length === 0. Si es así, significa que no hay tareas pendientes y se devuelve un elemento <h1>que dice "No hay tareas pendientes". Esto se hace para manejar el caso en el que no se le pase ninguna tarea al componente.

//Si el arreglo tasksno está vacío, el código continúa y renderiza un contenedor <div>que envuelve la lista de tareas.

//Para cada tarea en el arreglo tasks, se utiliza el método mappara iterar sobre ellas y generar elementos de JSX. Dentro de la función de mapeo, se crea un contenedor <div>con una clave ( key) igual al idde la tarea para asegurar una identificación única en la lista.

//Dentro de cada contenedor de tarea, se renderiza un elemento <h1>que muestra el título de la tarea ( task.title), un elemento <p>que muestra la descripción de la tarea ( task.description), y otro elemento <p>que muestra el idde la tarea ( task.id).

//Finalmente, se devuelve el resultado de la iteración del mapeo, que es una lista de elementos <div>que contienen información de cada tarea.

//El componente Tasklistse exporta mediante export default Tasklist;, lo que permite que otros archivos importen y utilicen este componente en sus aplicaciones.

//En resumen, este código representa un componente de React que renderiza una lista de tareas en forma de encabezado y párrafos. Si no hay tareas para mostrar, se muestra un mensaje indicando que no hay tareas pendientes.

//---------------------------------------------------------------

//SEPARAR COMPONENTES PARA QUE QUEDE MAS ODENADO Y COPRENSIBLE Y CREAMOS UN TEXTAREA PARA CREAR DESCRIPCION DE LA TAREA

//El codigo quedaria:

// import TaskCard from "./TaskCard";

// function Tasklist({ tasks }) {
//   if (tasks.length === 0) {
//     return <h1>No hay tareas pendientes</h1>;
//   }

//   return (
//     <div>
//       {tasks.map((task) => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   );
// }

// export default Tasklist;

//Cortamos el div y lo movemos al componente  TaskCard.jsx

//Este código representa un componente de React llamado Tasklistque muestra una lista de tareas. A continuación, se explica lo que hace el código paso a paso:

//Se importa el componente TaskCarddesde el archivo "./TaskCard.js". Esto significa que el componente Tasklistdesactivado el componente TaskCarddentro de su lógica.

//Se define la función Tasklistque acepta un objeto ta skscomo parámetro. El objeto tasksse espera que sea una matriz de tareas.

//Se realiza una verificación para determinar si la matriz de tareas está vacía. Si tasks.lengthes igual a 0, significa que no hay tareas pendientes.

//Si la matriz de tareas está vacía, se devuelve un elemento h1que muestra el mensaje "No hay tareas pendientes". Este mensaje se muestra en el lugar de la lista de tareas.

//Si la matriz de tareas no está vacía, se muestra la lista de tareas utilizando el método map. tasks.map((task) => ...)itera sobre cada elemento de la matriz tasksy crea un nuevo arreglo de elementos TaskCard.

//Dentro del map, se crea un componente TaskCardpara cada tarea. Se pasa la propiedad keycon el valor task.idpara garantizar una identificación única para cada componente TaskCard. Además, se pasa la tarea como propiedad taskal componente TaskCard.

//Todos los componentes TaskCardcreados se envuelven en un elemento div. Esto permite que todos los componentes TaskCardse muestren juntos como una lista.

//El componente Tasklistse exporta utilizando export default Tasklist, lo que permite que otros archivos importen y utilicen este componente en su código.

//En resumen, este código crea un componente Tasklistque muestra una lista de tareas. Si no hay tareas pendientes, se muestra un mensaje indicándolo. Si hay tareas, se muestra una lista de componentes TaskCard, uno por cada tarea en la matriz de tareas explicadas.

//---------------------------------------------------------
// Creamos una funcion deleteTask.jsx (parecida a createTask.jsx) y creamos un contexto

import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'




function Tasklist() {
const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>No hay tareas pendientes</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> 
      ))}
    </div>
  );
}

export default Tasklist;

// Este código es un componente de React llamado "Tasklist" que muestra una lista de tareas. Aquí está el desglose de lo que hace:

// Importa el componente "TaskCard" desde el archivo "./TaskCard". Esto implica que el componente "TaskCard" está definido en ese archivo y se utilizará en este componente.

// Importa el hook "useContext" de la biblioteca 'react'. El hook "useContext" permite acceder al contexto de React desde un componente funcional. En este caso, se utilizará para acceder al contexto "TaskContext".

// Importa el contexto "TaskContext" desde el archivo "../context/TaskContext". Esto implica que el contexto "TaskContext" está definido en ese archivo y se utilizará en este componente.

// Define el componente funcional "Tasklist".

// Utiliza el hook "useContext" para obtener el valor de "tasks" del contexto "TaskContext". El valor de "tasks" se asigna a la variable "tasks" utilizando la desestructuración.

// Comprueba si la longitud de la matriz "tasks" es igual a cero. Si es así, se devuelve un elemento <h1> que muestra el mensaje "No hay tareas pendientes". Esto significa que si no hay tareas en la lista, se mostrará este mensaje en lugar de la lista de tareas.

// Si hay tareas en la lista (es decir, la longitud de "tasks" no es cero), se renderiza un <div> que contiene una serie de componentes "TaskCard". El método map() se utiliza para iterar sobre cada tarea en la matriz "tasks" y se genera un componente "TaskCard" para cada tarea. Cada componente "TaskCard" recibe una clave única ("key") basada en la propiedad "id" de la tarea, y la tarea en sí se pasa como una prop llamada "task". En resumen, se muestra una lista de componentes "TaskCard" para cada tarea en la matriz "tasks".

// Finalmente, se exporta el componente "Tasklist" como el componente predeterminado para que pueda ser importado y utilizado en otros archivos de React.

// En general, este código muestra una lista de tareas utilizando el componente "TaskCard", y si no hay tareas, muestra un mensaje indicando que no hay tareas pendientes.
