import React from "react";

const Todo: React.FC<{ text: string; removeTodo: () => void }> = (props) => {
  console.log(props);
  return (
    <li className="todoItem" onClick={props.removeTodo}>
      {props.text}
    </li>
  );
};

export default Todo;
