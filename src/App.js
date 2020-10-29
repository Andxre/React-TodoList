import React, { useState } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import TodoList from "./components/TodoList";

function App() {
  const [titles, setTitles] = useState([]);

  const addList = (title) => {
    if (titles.length < 3) {
      setTitles([...titles, title]);
    }
    return;
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      {/* Add a Todolist Generator (GeneratorForm.JS) */}
      <ListForm addList={addList} />
      <div className="Lists">
        {/* Map TodoList, App should have a state containing titles?  */}
        {titles.map((title) => (
          <TodoList key="title" title={title} />
        ))}
      </div>
    </div>
  );
}

export default App;
