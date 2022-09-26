import React, { useState } from "react";
import TodoList from "./TodoList";

// const Local_Storage_Key = "react-app-acciojob-todos";

function Todo() {
  const [todos, setTodos] = useState([]);

  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [todoInput, setTodoInput] = useState("");

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (todoInput === "") return;
    setTodos([
      {
        id: Math.random() * 1000000,
        text: todoInput,
        isCompleted : false
      },
      ...todos,
    ]);
    setTodoInput("");
  };
  function markComplete(id){
    let markedElement = todos.find(item => item.id === id)
    let updatedTodos = todos.filter(item => item.id!==id)
    setTodos([
      ...updatedTodos,
      {
        id: Math.random() * 1000000,
        text: markedElement.text,
        isCompleted : true
      }
    ]);
  }

  return (
    <div className="todo-app">
      <h3 className="todo-title">TODO APP</h3>
      <input
        type="text"
        name="text"
        className="input-text"
        placeholder="input task"
        onChange={handleInput}
      />
      <button type="button" className="submit-button" onClick={handleSubmit}>
        Add
      </button>
      {todos.map((todo) => (
        <TodoList
          text={todo.text}
          key={todos.id}
          id={todo.id}
          deleteItem={deleteItem}
          markComplete = {markComplete}
        />
      ))}
    </div>
  );
}

export default Todo;

//
