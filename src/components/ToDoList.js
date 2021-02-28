import React from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ toDos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group-flush">
      {toDos.map((todo, i) => (
        <ToDoListItem
        key={todo.id}
            todo = {todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
