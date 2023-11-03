import { useState } from "react";
export default function TodoAdd(props) {
  const [input, setInput] = useState("");

  const itemHandler = (event) => {
    event.preventDefault();
    input &&
      props.updateTodo((oldValue) => {
        return [...oldValue, { id: props.generateUniqueId(), title: input }];
      });
    setInput("");
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      {/* A page will get reloded when even a form is submitted(use preventdefault) */}
      <form className=" d-flex justify-content-center align-items-center">
        <input value={input} onChange={inputHandler} required />
        <button onClick={itemHandler}>Create Todo</button>
      </form>
    </>
  );
}
