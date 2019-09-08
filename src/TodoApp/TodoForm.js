import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      className="TodoForm"
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Add Todo items here..."
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;