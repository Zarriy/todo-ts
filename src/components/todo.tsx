import React from "react";

const Todo: React.FC<{ text: string }> = (props) => {
  return <li className="todoItem">{props.text}</li>;
};

export default Todo;
