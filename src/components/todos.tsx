import React from "react";
import TodosCreate from "../model/todo";
import Todo from "./todo";

const Todos: React.FC<{ todolist: TodosCreate[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.todolist.map((item) => (
          <Todo key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
