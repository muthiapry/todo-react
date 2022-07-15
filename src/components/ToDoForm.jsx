import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <TextField
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          variant="outlined"
          label="To do"
        />
        <Button
          onClick={() => {
            handleClick(todo);
            setTodo("");
          }}
          variant="contained"
        >
          Submit
        </Button>
      </span>
    </div>
  );
};

export default ToDoForm;
