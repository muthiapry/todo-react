import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    onChange={() => handleCheckbox(todo.id)}
                    disableRipple
                    checked={todo.complete}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={todo.task}
                  className={todo.complete ? "completed" : ""}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
