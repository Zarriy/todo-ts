import React from "react";
import TodosCreate from "../model/todo";
import Todo from "./todo";

const Todos: React.FC<{
  todolist: TodosCreate[];
  removeTodo: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <ul className="todoItems">
        {props.todolist.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            removeTodo={props.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
