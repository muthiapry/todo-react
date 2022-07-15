import {
  CheckBox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/icons-material";
import React from "react";

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckBox onChange={() => handleCheckbox(index)} disableRipple />
                </ListItemIcon>
                <ListItemText
                  primary={todo.task}
                  className={todo.complete && "completed"}
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
