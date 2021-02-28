import React, { useEffect, useReducer } from "react";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";
import { toDoReducer } from "./toDoReducer";
import "./ToDoStyles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || [];
};
export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };
  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };
  const handleAddToDo = (newToDo) => {
    dispatch({
      type: "add",
      payload: newToDo,
    });
  };

  return (
    <div>
      <h1 className="text-center">To Do App ({toDos.length})</h1>
      <p className="text-center">(Haga clic en el item para marcarlo/desmarcarlo como hecho/deshecho)</p>
      <h6 className="text-muted text-center">Hecho por Juan Velozo</h6>
      <hr />
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-8">
          <ToDoList
            toDos={toDos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-4">
          <ToDoAdd
          handleAddToDo={handleAddToDo}/>
        </div>
      </div>
    </div>
  );
};
