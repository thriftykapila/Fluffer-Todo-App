import React from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
