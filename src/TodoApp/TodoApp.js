import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  TextField,
  IconButton,
  Container,
  Paper
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  }
});

function TodoList({ todo, index, completeTodo, deleteTodo }) {
  const classes = useStyles();

  return (
    <List>
      <ListItem button onClick={() => completeTodo(index)}>
        <ListItemAvatar>
          <Avatar className={classes.greenAvatar}>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={todo.text}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        />
        <ListItemSecondaryAction>
          <ListItemIcon>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)} >
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-bare"
        margin="normal"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Practice JavaScript",
      isCompleted: false
    },
    {
      text: "Update Resume",
      isCompleted: false
    },
    {
      text: "Go Kyaking",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !todos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="md">
      <TodoForm addTodo={addTodo} />
      <Paper>
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Paper>
    </Container>
  );
}