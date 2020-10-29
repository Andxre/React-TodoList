import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const LOCAL_STORAGE_KEY = "react-todo-list";

function TodoList({ title }) {
  const divStyle = {
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "40px",
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) setTodos(storageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (todo !== "") setTodos([todo, ...todos]);
  };

  const removeTodo = (todoID) => {
    setTodos(todos.filter((todo) => todoID !== todo.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  return (
    <div style={divStyle}>
      <h3
        style={{
          margin: "0",
          paddingBottom: "10px",
        }}
      >
        {title}
      </h3>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.task}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
