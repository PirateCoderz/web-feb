import { useState } from "react";
// import TodoListData from "./TodoListData";

const TodoForm = () => {


  const [todo, settodo] = useState(['Do Breakfast']);
  const [todoslist, settodos] = useState();

  function submitHandler(e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    settodos(preev => [...preev, todo]);
    // const todoText = e.target.elements.todo.value.trim();
  }

  return (
   <div>
     <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => {settodo(e.target.value)}} placeholder="Add a new todo..." />
      <button type="submit">Add</button>
    </form>

    <ul>
      {todoslist.map(function (n, i) {
        return <li key={i}>{n}</li>
      })}
    </ul>
   </div>
  );
}

export default TodoForm;