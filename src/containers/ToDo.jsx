import { Button } from "@mui/material";
import React, { useState } from "react";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    // state is immutable, you need to replace the whole array
    // ...todos is the spread operator, it spreads the array
    const newTodo = { id: todos.length + 1, task: todo, complete: false };
    setTodos([...todos, newTodo]);
  };

  // const handleCheckbox = (id) => {
  //   alert(`checkbox ${index} was checked!`);
  // };

  const handleCheckbox = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
      <Button variant="outlined" color="error" onClick={removeCompleted}>
        Remove Completed
      </Button>
    </div>
  );
};

export default ToDo;
