// import Tasklist from "./Tasklist";

// function App() {
//   return (
//     <div>
//       {" "}
//       <Tasklist />{" "}
//     </div>
//   );
// }

// export default App;

//------------------------------------------------
// Añadir tareas al formulario, creamos un TaskForm.jsx en src
//--------------------------------------------------------
// Modificamos el componente App.jsx para que sea el que contenga el arreglo de tareas

// import Tasklist from "./Tasklist";
// import TaskForm from "./TaskForm";

// import { tasks as data } from "./tasks";
// import { useEffect, useState } from "react";

// function App() {
//   const [tasks, setTask] = useState([]);

//   useEffect(() => {
//     setTask(data);
//   }, []);

//   return (
//     <div>
//       <TaskForm/>
//       <Tasklist tasks={tasks}/>
//     </div>
//   );
// }

// export default App;

//Este código es un componente de una aplicación React que renderiza una lista de tareas y un formulario para agregar nuevas tareas.

//Aqui esta la explicacion por linea:

//import Tasklist from "./Tasklist";- Importa el componente Tasklistdesde el archivo Tasklist.js.

//import TaskForm from "./TaskForm";- Importa el componente TaskFormdesde el archivo TaskForm.js.

//import { tasks as data } from "./tasks";- Importa un objeto llamado tasksdesde el archivo tasks.jsy lo asigna a una variable llamada data. El alias asse utiliza para darle a la importación un nombre diferente en el contexto actual.

//import { useEffect, useState } from "react";- Importa los ganchos useEffecty useStatede la biblioteca react. Estos ganchos se utilizan para manejar el ciclo de vida y el estado en los componentes de React.

//function App() {- Definir un componente de función llamado App.

//const [tasks, setTask] = useState([]);- Declara una variable de estado de llamada tasksy una función setTaskpara actualizar su valor. Inicialmente, el valor del estado se establece en un arreglo vacío [].

//useEffect(() => { setTask(data); }, []);- Utiliza el gancho useEffectpara realizar una acción cuando el componente se monta en el DOM. En este caso, se establece el estado taskscon el valor de data, que es el arreglo de tareas importado anteriormente. El arreglo vacío []como segundo argumento asegura que esta acción solo se ejecuta una vez al montar el componente.

//<div>- Inicia un elemento divque envuelve el contenido del componente.

//<TaskForm/>- Renderiza el componente TaskForm, que es un formulario para agregar nuevas tareas.

//<Tasklist task={tasks}/>- Renderiza el componente Tasklisty pasa la prop taskcon el valor de tasks, que es el arreglo de tareas.

//export default App;- Exporta el componente Appcomo el componente principal de este archivo, lo que permite que se pueda utilizar en otros archivos de la aplicación.

//En resumen, este código importa dos componentes, TaskFormy Tasklistun arreglo de tareas desde archivos externos. Luego, utilice el estado y el efecto del componente para almacenar y actualizar las tareas. Finalmente, renderiza los componentes TaskFormy Tasklisten el DOM.

//---------------------------------------------------
//Lo que hemos hecho hasta ahora es para que TaskFormjsx tambien peda acceder al arreglo de tareas.
// React me dice que para poder añadir algo de este arreglo, lo que voy hacer es crear una funcion en App.jsx (por ejemplo CreateTask.jsx) y esta funcion se la vamos a pasar a TaskForm.jsx, TaskForm.jsx le va a dar un dato y se lo va a devolver a App.jsx. Entonces App.jsx lo que va a hacer con este CreateTask.jsx es llenar este arreglo.

// El codigo quedaria asi:

// import Tasklist from "./Tasklist";
// import TaskForm from "./TaskForm";

// import { tasks as data } from "./tasks";
// import { useEffect, useState } from "react";

// function App() {
//   const [tasks, setTask] = useState([]);

//   useEffect(() => {
//     setTask(data);
//   }, []);

//   function createTask(taskTittle) {
//     setTask([
//       ...tasks,
//       {
//         tittle: taskTittle,
//         id: tasks.length,
//         description: "nueva tarea",
//       },
//     ]);
//   }

//   return (
//     <div>
//       <TaskForm createTask={createTask} />
//       <Tasklist tasks={tasks} />
//     </div>
//   );
// }

// export default App;

//Este código es un componente de una aplicación de lista de tareas en React. Permíteme explicar las diferentes partes del código:

//Importaciones:

//Tasklist y TaskFormse importan desde los archivos "./Tasklist" y "./TaskForm", respectivamente. Estos son componentes de React que se utilizarán más adelante en el código.
//tasks se importa desde el archivo "./tareas". Esto es un objeto de datos que contiene una lista inicial de tareas.
//Gancho useState:

//Se declara una variable de estado llamada tasksusando el gancho useState. El valor inicial de taskses una matriz vacía [].
//Efecto de uso de gancho:

//Se utiliza el gancho useEffectpara ejecutar una función después de que el componente se haya montado en el DOM.
//La función dentro de useEffectestablece el valor inicial de tasksutilizar el conjunto de datos importados data.
//Función createTask:

//Es una función que toma un argumento taskTitley se utiliza para agregar una nueva tarea al estado tasks.
//Dentro de la función, se utiliza la función setTaskpara actualizar el estado taskscon una nueva matriz que contiene todas las tareas anteriores ( ...tasks) y una nueva tarea que se crea con la información proporcionada.
//Cada tarea tiene un título ( title), un ID basado en la longitud actual de las tareas ( id: tasks.length), y una descripción ("nueva tarea").
//renderizado:

//El componente Appdevuelve elementos JSX que representan la interfaz de usuario.
//Hay dos componentes: <TaskForm createTask={createTask} />y <Tasklist tasks={tasks}/>que se están renderizando.
//<TaskForm>es un componente que permite al usuario ingresar un nuevo título de tarea y llamar a la función createTaskpara agregarla al estado.
//<Tasklist>es un componente que recibe la lista de tareas ( tasks) y las muestras en la pantalla.
//exportación:

//El componente App se exporta para poder ser utilizado en otros archivos de la aplicación.
//En resumen, este código crea una aplicación de lista de tareas en React. La aplicación muestra un formulario donde los usuarios pueden ingresar nuevas tareas. Cuando se envía el formulario, se agrega una nueva tarea a la lista y se muestra la lista completa de tareas en la pantalla.
//---------------------------------------------------------
// creammos un textarea en TaskForm.jsx asi que mejoramos la funcion CreateTask

// import Tasklist from "./components/Tasklist";
// import TaskForm from "./components/TaskForm";

// import { tasks as data } from "./data/tasks";
// import { useEffect, useState } from "react";

// function App() {
//   const [tasks, setTask] = useState([]);

//   useEffect(() => {
//     setTask(data);
//   }, []);

//   function createTask(task) {
//     setTask([
//       ...tasks,
//       {
//         tittle: task.tittle,
//         id: tasks.length,
//         description: task.description,
//       },
//     ]);
//   }

//   return (
//     <div>
//       <TaskForm createTask={createTask} />
//       <Tasklist tasks={tasks} />
//     </div>
//   );
// }

// export default App;

//Este código es un componente de una aplicación React que muestra una lista de tareas. Aquí está el desglose del código:

//Las primeras líneas importan los componentes Tasklisty TaskFormdesde los archivos correspondientes en el directorio "./components".

//A continuación, se importa un objeto llamado datadesde el archivo "./data/tasks". Este objeto contiene una lista de tareas predefinidas.

//Luego se importan las funciones useEffecty useStatedesde la biblioteca "reaccionar". Estas funciones se utilizarán para manejar el estado de las tareas en el componente.

//La función Appes el componente principal de la aplicación. Se define como una función que devuelve JSX (JavaScript XML), que es una sintaxis similar a HTML utilizada por React para definir la interfaz de usuario.

//Dentro de la función App, se declara un estado llamado tasksutilizando el gancho useState. El estado inicial es un arreglo vacío [].

//El gancho useEffectse utiliza para ejecutar una función después de que el componente se haya montado en el DOM. En este caso, se usa para establecer el estado taskscon los datos importados desde datauna sola vez, utilizando la función setTask.

//La función createTaskse define para agregar una nueva tarea al estado tasks. Toma un objeto taskcomo argumento y utiliza la función setTaskpara actualizar el estado. Se crea un nuevo arreglo de tareas usando el operador de propagación ( ...tasks), y se agrega un nuevo objeto de tarea al final del arreglo. El objeto de tarea contiene las propiedades title, idy descriptionobtuvo el objeto taskrecibido como argumento.

//Finalmente, en el bloque de retorno, se renderizan los componentes TaskFormy Tasklist. El componente TaskFormrecibe la función createTaskcomo una prop llamada createTask. El componente Tasklistrecibe el estado taskscomo una prop llamada tasks.

//El componente Appse exporta como un valor predeterminado para que pueda ser utilizado en otros archivos.

//En resumen, este código es un componente de React que muestra una lista de tareas y permite agregar nuevas tareas utilizando un formulario. Utiliza el estado tasksy las funciones setTasky createTaskpara manejar las tareas en la aplicación.

//-----------------------------
// Creamos un DeleteTask.jsx para poder eliminar tareas de la lista y un contexto

import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";


function App() {
  return (
    <div>
      <TaskForm  />
      <Tasklist />
    </div>
  );
}

export default App;

