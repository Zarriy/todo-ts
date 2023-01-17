import { useState } from "react";
import TodosCreate from "./model/todo";
import Todos from "./components/todos";
import NewTodo from "./components/newTodo";

function App() {
  const [todo, setTodo] = useState<TodosCreate[]>([]);

  const updateTodo = (value: string) => {
    const newTodo = new TodosCreate(value);
    setTodo((prev) => [newTodo, ...prev]);
  };

  const removalHandler = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-body">
      <NewTodo onAdd={updateTodo} />

      <Todos todolist={todo} removeTodo={removalHandler} />
      {todo.length > 0 && <p>Click on the item to delete</p>}
    </div>
  );
}

export default App;
