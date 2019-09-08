import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import '../styles.css';

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div>
      <Container maxWidth="lg">
        <Paper className="TodoApp">
          <TodoForm
            saveTodo={todoText => {
              const trimmedText = todoText.trim();
              if (trimmedText.length > 0) {
                addTodo(trimmedText);
              }
            }}
          />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Paper>
      </Container>
    </div>
  );
};

export default TodoApp;