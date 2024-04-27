import { useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState(["react", "css"]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("added");
    let oldTodos = [...todos];
    oldTodos.push("js");
    console.log(oldTodos);
    setTodos(oldTodos);
  };

  return (
    <>
      <div>todos</div>
      <hr />
      <form onSubmit={addTodo}>
        <input type="text" className="border-2 border-black p-1" />
        <button className="bg-sky-300 hover:bg-sky-700 border-2 border-black capitalize p-1">
          Add todos
        </button>
      </form>
      <hr />
      <ul className="list-disc pl-8">
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  );
}
