import { useState } from "react";
import TodosCreate from "./model/todo";
import Todos from "./components/todos";
import NewTodo from "./components/newTodo";

function App() {
  const [todo, setTodo] = useState<TodosCreate[]>([]);

  const updateTodo = (value: string) => {
    const newTodo = new TodosCreate(value);
    setTodo((prev) => prev.concat(newTodo));
  };

  return (
    <div className="App">
      <NewTodo onAdd={updateTodo} />
      <Todos todolist={todo} />
    </div>
  );
}

export default App;
