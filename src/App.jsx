import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto ">
      <h1 className="mb-10 text-4xl font-extrabold  text-white">Crea tu tarea</h1>
        <TaskForm />
        <Tasklist />
      </div>
    </div>
  );
}

export default App;
