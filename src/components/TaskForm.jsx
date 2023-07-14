// import { useState } from "react";

// function TaskForm() {
//   const [tittle, setTittle] = useState("");
//   //const [tittle, setTittle] = useState(""); ES IGUAL A PONER const tittle = ""

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(tittle)
//   }
//   return (
//     <div>
//       <form onSubmit = {handleSubmit} >
//         <input
//           placeholder="Escribe tu tarea"
//           onChange={(e) => {
//             setTittle(e.target.value);
//           }}
//         ></input>
//         <button>Guardar</button>
//       </form>
//     </div>
//   );
// }
// export default TaskForm;

//Este código es un componente de formulario de tareas escrito en React. Aqui esta la explicacion por linea:

//import { useState } from "react";: Importa la función useStatedel paquete "react". useStatees un gancho de React que permite agregar estado a componentes funcionales.

//function TaskForm() {: Declara una función llamada TaskForm, que representa el componente de formulario de tareas.

//const [tittle, setTittle] = useState("");: Declara una variable de estado tittley su función de actualización setTittleutilizando el gancho de llamada useState. El estado inicial de tittlese establece en una cadena vacia.

//const handleSubmit = (e) => {: Declara una función llamada handleSubmitque se ejecuta cuando se envía el formulario.

//e.preventDefault();: Llama al método preventDefault()en el evento epara evitar que el formulario se envíe y se recargue la página.

//console.log(tittle): Imprime el valor actual de tittleen la consola.

//<form onSubmit={handleSubmit}>: Crea un formulario que ejecutará la función handleSubmitcuando se envíe.

//<input placeholder="Escribe tu tarea" onChange={(e) => { setTittle(e.target.value); }}></input>: Crea un campo de entrada de texto donde los usuarios pueden escribir su tarea. El atributo placeholderproporciona un texto de ejemplo para mostrar dentro del campo. El atributo onChangedefine una función de devolución de llamada que se ejecuta cuando el valor del campo cambia. En este caso, actualiza el estado de tittlecon el valor actual del campo de entrada.

//<button>Guardar</button>: Crea un botón para enviar el formulario.

//</form>: Cierra el formulario.

//</div>: Cierra el contenedor del componente.

//export default TaskForm;: Exporta el componente TaskFormpara que pueda ser utilizado en otros archivos.

//En resumen, este código muestra un componente de formulario de tareas que captura el título de una tarea a través de un campo de entrada y lo imprime en la consola cuando el formulario se envía. Utilice el gancho useStatede React para almacenar y actualizar el estado del título de la tarea.

//----------------------------------------------------------
// En este componente TaskForm.jsx no existe el arreglo de tareas (esta en Tasklist.jsx). Hasta ahora creamos tres componentes: App.jsx, TaskForm.jsx y Tasklist.jsx (main.jsx lo unico que hace es iniciar con App.jsx y con App.jsx va a llamar a los componentes Tasklist.jsx y TaskForm.jsx)

// TaskList.jsx tiene el dato de un array de tareas, este arreglo de tareas SOLO ESTA DISPONIBLE EN EN EL COMPONENTE Tasklist.jsx. De tal forma de que TaskForm.jsx no puede acceder a este arreglo y de hecho el App.jsx tampoco puede acceder.

// Entonces vamos a "subir de nivel" el arreglo de tareas lo vamos a subir al componente App.jsx (en este componenete es el que contiene los componentes TaskForm.jsx y Tasklist.jsx). De esta forma lo que vamos a hacer luego simplemente desde App.jsx pasarle el arreglo de tareas a TaskForm.jsx y Tasklist.jsx.

// Modificamos el componente Tasklist.jsx

//----------------------------------------------

//Como conectar el componente App.jsx con el componente TaskForm.jsx

// import { useState } from "react";

// function TaskForm({ createTask }) {
//   const [tittle, setTittle] = useState("");
//   //const [tittle, setTittle] = useState(""); ES IGUAL A PONER const tittle = ""

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createTask(tittle); //tittle es el taskTittle (parametro de la funcion en App.jsx)
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Escribe tu tarea"
//           onChange={(e) => {
//             setTittle(e.target.value);
//           }}
//         ></input>
//         <button>Guardar</button>
//       </form>
//     </div>
//   );
// }
// export default TaskForm;

//Este código es un componente de formulario de tarea en React. Permite al usuario escribir una tarea en un campo de entrada y guardarla cuando se haga clic en el botón "Guardar". A continuación, te explico cómo funciona:

//Importaciones:
//useStatees un gancho de React que permite al componente tener un estado interno y realizar cambios en él.
//Declaración del componente TaskForm:
//El componente TaskForm recibe una llamada prop createTask, que es una función utilizada para crear una tarea. Este componente se encarga de capturar el título de la tarea ingresado por el usuario y llamar a la función createTaskcuando se guarda la tarea.
//Declaración de estado con useState:
//const [tittle, setTittle] = useState("");define una variable de estado llamada tittle(título) y una función setTittlepara actualizar ese estado. El valor inicial del estado es una cadena vacía ( ""). La función useStatedevuelve una matriz con dos elementos: el estado actual y la función para actualizar el estado.
//Declaración de la función handleSubmit:
//handleSubmites una función que se ejecuta cuando se envía el formulario. Toma un evento ( e) como argumento y llama e.preventDefault()para evitar que el formulario se envíe y se recargue la página. Luego, llama a la función createTaskpasando el valor actual del título como argumento.
//Renderizado del componente:
//En el método render()del componente, se devuelve el JSX que representa el formulario de tarea.
//Cuando se envía el formulario ( onSubmit), se llama a la función handleSubmit.
//El campo de entrada ( input) tiene un atributo placeholderque muestra un texto de ejemplo para el usuario.
//Cuando se produce un cambio en el campo de entrada ( onChange), se llama a la función setTittlecon el valor del campo de entrada ( e.target.value) para actualizar el estado tittle.
//El boton "Guardar" se utiliza para enviar el formulario.
//Exportación del componente:
//export default TaskForm;exporta el componente TaskFormpara que pueda ser utilizado en otros archivos.
//En resumen, este código implementa un formulario de tarea en React que captura el título de la tarea ingresado por el usuario y lo guarda cuando se hace clic en el botón "Guardar".

//---------------------------------------------------

// Colocar una descripcion y contexto

import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [tittle, setTittle] = useState("");
  //const [tittle, setTittle] = useState(""); ES IGUAL A PONER const tittle = ""
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext) 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tittle, description);
    createTask({
      tittle,
      description,
    }); //createTask.jsx tiene como parametro un objeto, entonces le pasamos un objeto con un titulo y una descripcion. 

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


// Este código es un componente de formulario en React que permite al usuario ingresar un título y una descripción para crear una tarea. Aquí está la explicación paso a paso:

// Importaciones:

// useState y useContext son dos hooks proporcionados por React. useState se utiliza para crear y manipular el estado local en un componente funcional, mientras que useContext se utiliza para acceder al contexto en React.
// TaskContext es un contexto personalizado importado desde "../context/TaskContext". Este contexto probablemente contiene la lógica para crear tareas.
// Definición del componente TaskForm:

// Dentro del componente, se inicializan dos estados locales utilizando el hook useState:
// tittle: representa el título de la tarea y se inicializa con una cadena vacía.
// description: representa la descripción de la tarea y también se inicializa con una cadena vacía.
// Se utiliza el hook useContext para obtener la función createTask del contexto TaskContext. Esta función probablemente se utiliza para crear una nueva tarea utilizando los datos proporcionados por el formulario.
// Definición de la función handleSubmit:

// Esta función se ejecuta cuando se envía el formulario. Toma un evento e como argumento y llama a e.preventDefault() para evitar que el formulario se envíe y la página se recargue.
// Luego, muestra en la consola el título y la descripción de la tarea ingresados por el usuario.
// Llama a la función createTask pasando un objeto con el título y la descripción como argumentos. Esto probablemente enviará los datos de la tarea al servidor o realizará alguna otra acción relacionada con la creación de tareas.
// Finalmente, restablece los estados tittle y description a una cadena vacía, lo que limpia los campos del formulario después de enviarlo.
// Renderizado del componente:

// El componente devuelve un formulario que contiene un campo de entrada (<input>) y un área de texto (<textarea>) para ingresar el título y la descripción de la tarea, respectivamente.
// El campo de entrada está enlazado al estado tittle mediante la propiedad value y el evento onChange. Cada vez que el usuario escribe en el campo de entrada, el estado tittle se actualiza con el nuevo valor.
// El área de texto está enlazada al estado description de manera similar al campo de entrada.
// Cuando se envía el formulario, se llama a la función handleSubmit definida anteriormente.
// Por último, hay un botón de "Guardar" que se utiliza para enviar el formulario.


