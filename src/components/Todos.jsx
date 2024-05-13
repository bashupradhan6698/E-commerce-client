import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    let oldTodo = [...todos];
    oldTodo.push(event.target.title.value);
    setTodos(oldTodo);
  };

  const deleteTodo = (index) => {
    console.log("delete", index);
    let tempTodo = [...todos];
    tempTodo = tempTodo.filter((element, idx) => {
      return idx != index;
    });
    setTodos(tempTodo);
  };
  return (
    <>
      <div>add todo</div>
      <hr />
      <form onSubmit={addTodo}>
        <input
          id="firstname"
          name="title"
          type="text"
          required="true"
          className="border-2 border-black p-1 "
        />
        <button className="border-2 border-black p-1 rounded h-full">
          Addtodo
        </button>
      </form>

      <ul className="list-disc mx-4">
        {todos.map((todo, index) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
                className="border-2 border-black p-0.5 rounded-full"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
