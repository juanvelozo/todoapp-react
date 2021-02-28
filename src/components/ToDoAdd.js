import React from "react";
import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({ handleAddToDo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddToDo(newToDo);
    reset();
  };
  return (
    <div>
      <h4>Add To Do</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Learn...,Buy...,Call..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-success mt-1 btn-block"
        >
          Add
        </button>
      </form>
    </div>
  );
};
