import React from "react";

function TodoList(props) {
  // Delete function takes the id to further process in the Todo.js
  function handleDelete() {
    props.deleteItem(props.id);
  }
  // mark Complete function takes the id to further process in the Todo.js
  function handleCheckbox() {
    props.markComplete(props.id);
  }

  
  return (
    <div className="todo-list" key={props.key}>
      <div className="todo-main-content">
        <input
          type="checkbox"
          name="isCompleted"
          className="checkbox"
          checked ={props.isCompleted}
          onClick={handleCheckbox}
          
        />

        {/* if task is completed it should appear as striked text */}

        {!props.isCompleted ? (
          <span className="list-text">{props.text}</span>
        ) : (
          <span className="list-text">
            <strike>{props.text}</strike>
          </span>
        )}

      </div>
      <span
        className="material-symbols-outlined cancel-button"
        onClick={handleDelete}
      >
        cancel
      </span>
    </div>
  );
}

export default TodoList;
