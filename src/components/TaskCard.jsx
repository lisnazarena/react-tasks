// import React from "react";

// function TaskCard({ task }) {
//   return (
//     <div>
//       <h1>{task.tittle}</h1>
//       <p>{task.description}</p>
//       <p>{task.id}</p>
//     </div>
//   );
// }

// export default TaskCard;

//Este código es un componente de React llamado "TaskCard". Este componente acepta un objeto "task" como prop, y se utiliza para renderizar una tarjeta de tarea en una interfaz de usuario.

//Aquí está cómo funciona el código:

//Importa la biblioteca React, que es necesaria para definir componentes de React.

//Define una función llamada "TaskCard" que acepta un parámetro llamado "task". El parámetro "tarea" es un objeto que contiene información sobre una tarea específica.

//En el cuerpo de la función, se devuelve una estructura JSX que representa la apariencia de la tarjeta de tarea. JSX es una extensión de sintaxis de JavaScript que permite escribir un código similar a HTML dentro de los componentes de React.

//La estructura JSX contiene varios elementos:

//Un elemento <div>que envuelve todo el contenido de la tarjeta de tarea.
//Un elemento <h1>que muestra el título de la tarea. Se accede al título utilizando la sintaxis de interpolación de llaves ( {}) y el atributo task.tittle.
//Un elemento <p>que muestra la descripción de la tarea. Se accede a la descripción de manera similar a través del atributo task.description.
//Otro elemento <p>que muestra el ID de la tarea, accedido a través del atributo task.id.
//Finalmente, se exporta el componente TaskCardutilizando la declaración export default. Esto permite que otros archivos importen y utilicen este componente en sus propios componentes de React.

//En resumen, este código define un componente de React llamado "TaskCard" que muestra la información de una tarea, incluyendo el título, la descripción y el ID. Este componente se puede utilizar en otros componentes de React para renderizar tarjetas de tarea en una interfaz de usuario.

//-------------------------------------------------------

//Crear un boton para eliminar tareas 

// import React from "react";

// function TaskCard({ task, deleteTask }) {

//   return (
//     <div>
//       <h1>{task.tittle}</h1>
//       <p>{task.description}</p>
//       <p>{task.id}</p>
//       <button onClick={() => {deleteTask(task.id)}}>Eliminar Tarea</button>
//     </div>
//   );
// }

// export default TaskCard;



// Este código es un componente de React llamado TaskCardque muestra la información de una tarea y proporciona un botón para eliminarla. Aquí está lo que hace cada parte del código:

// Importa el módulo Reactdesde la biblioteca de React. Esto es necesario para crear componentes de React.
// javascript

// Copiar código
// import React from "react";
// Declara la función TaskCardque acepta dos propiedades como argumentos: tasky deleteTask. taskes un objeto que contiene la información de una tarea, como el título, la descripción y el ID. deleteTaskes una función que se ajusta para eliminar la tarea.
// javascript

// Copiar código
// function TaskCard({ task, deleteTask }) {
// Dentro de la función, se define el contenido JSX que se renderizará cuando se utilice este componente. El contenido JSX representa la estructura y el aspecto del componente.
// javascript

// Copiar código
// return (
//   <div>
//     <h1>{task.tittle}</h1>
//     <p>{task.description}</p>
//     <p>{task.id}</p>
//     <button onClick={() => {deleteTask(task.id)}}>Eliminar Tarea</button>
//   </div>
// );
// El contenido JSX incluye varios elementos:

// <h1>{task.tittle}</h1>: Renderiza el título de la tarea dentro de un encabezado de nivel 1 ( <h1>).
// <p>{task.description}</p>: Renderiza la descripción de la tarea dentro de un párrafo ( <p>).
// <p>{task.id}</p>: Renderiza el ID de la tarea dentro de otro párrafo.
// <button onClick={() => {deleteTask(task.id)}}>Eliminar Tarea</button>: Crea un botón con el texto "Eliminar Tarea". Cuando se hace clic en el botón, se llama a la función deleteTaskpasando el ID de la tarea como argumento.
// Por último, se exporta el componente TaskCardcomo el valor predeterminado para que pueda ser utilizado en otros archivos.

// javascript

// Copiar código
// export default TaskCard;
// En resumen, este código define un componente de React llamado TaskCardque muestra la información de una tarea y proporciona un botón para eliminarla. El componente recibe la información de la tarea a través de la propiedad tasky la función de eliminación a través de la propiedad deleteTask.


//----------------------------------------------------
//Crear contexto:


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


// Este código es un componente de React llamado "TaskCard" que representa una tarjeta de tarea. Aquí está el desglose de lo que hace cada parte del código:

// Importaciones:

// React: Importa el módulo React necesario para definir componentes de React.
// TaskContext: Importa el contexto de la tarea desde un archivo o módulo llamado "TaskContext".
// useContext: Importa el gancho (hook) useContext de React que se utiliza para acceder al valor del contexto.
// Función TaskCard:

// La función TaskCard es un componente de función de React que acepta una propiedad llamada task.
// Dentro del componente, se utiliza useContext(TaskContext) para acceder al contexto de tareas y extraer la función deleteTask del contexto.
// El componente devuelve una estructura JSX que representa una tarjeta de tarea.
// En el contenido de la tarjeta, se muestran los detalles de la tarea, como el título, la descripción y el ID.
// Además, hay un botón "Eliminar Tarea" que, al hacer clic, llama a la función deleteTask pasando el ID de la tarea como argumento.
// Exportación:

// Al final del código, el componente TaskCard se exporta como el valor predeterminado, lo que permite que se pueda importar y utilizar en otros archivos o componentes de React.
// En resumen, este código define un componente de React llamado TaskCard que muestra los detalles de una tarea y proporciona la opción de eliminarla utilizando una función deleteTask obtenida del contexto de tareas.
