import { useReducer } from "react";
import ReactDOM from "react-dom/client";

/*
Хук useReducer приймає два аргументи.
useReducer(<reducer>, <initialState>)
Функція reducer містить власну логіку стану,
а initialState може бути простим значенням, але зазвичай міститиме об’єкт.
Хук useReducer повертає поточний state (стан) та dispatch (спосіб відправки).
*/

const initialTodos = [
{
id: 1,
title: "Todo 1",
complete: false,
},
{
id: 2,
title: "Todo 2",
complete: false,
},
];


const reducer = (state, action) => {
switch (action.type) {
case "COMPLETE":
  return state.map((todo) => {
    if (todo.id === action.id) {
      return { ...todo, complete: !todo.complete };
    } else {
      return todo;
    }
  });

case "DELETE":
  return state.filter((todo) => {
    if (todo.id!==action.id) return todo;
  });
   
default:
  return state;
}
};

function Todos() {
const [todos, dispatch] = useReducer(reducer, initialTodos);

const handleComplete = (todo) => {
dispatch({ type: "COMPLETE", id: todo.id });
};
const handleDelete= (todo) => {
  dispatch({ type: "DELETE", id: todo.id });
  };
  

return (
<>
  {todos.map((todo) => (
    <div key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleComplete(todo)}
        />
        {todo.title}
        <input
          type="button"
          value="delete"
          onClick={() => handleDelete(todo)}
        />
      </label>
    </div>
  ))}
</>
);
}

export default Todos;