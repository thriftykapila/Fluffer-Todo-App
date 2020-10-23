import React, { useState, useEffect } from "react";

const Todo = ({ todoText, todos, setTodos, todo }) => {
  const textRef = React.useRef();
  const [btnDisplay, setbtnDisplay] = useState("none");
  const [btnDropdown, setbtnDropdown] = useState(false);

  useEffect(() => {
    if (textRef.current.scrollWidth > textRef.current.offsetWidth) {
      console.log(
        textRef.current.textContent +
          " in useEffect " +
          textRef.current.offsetWidth +
          " pref " +
          textRef.current.scrollWidth
      );
      setbtnDisplay("block");
    }
  });

  const deleteHandler = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };

  const toggleDropdown = () => {
    console.log(btnDropdown);
    let currentState = btnDropdown;
    setbtnDropdown(!currentState);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? "completed" : ""} ${
          btnDropdown ? "btn_dropdown" : ""
        }`}
        ref={textRef}
      >
        {todoText}
      </li>
      <div className="btn_wrap">
        <button
          onClick={toggleDropdown}
          className="complete-btn"
          style={{ display: `${btnDisplay}` }}
        >
          <i className="fas fa-angle-down"></i>
        </button>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
