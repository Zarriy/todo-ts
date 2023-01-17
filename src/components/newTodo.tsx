import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAdd: (value: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submissionHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAdd(enteredText);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={submissionHandler}>
      <label htmlFor="text">Type what you want to achieve today</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
