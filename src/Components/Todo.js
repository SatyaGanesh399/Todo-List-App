import React from 'react'
import TodoList from './Todo-list'
function Todo() {
  return (
    <div className='todo-app'>
        <h3 className='todo-title'>TODO APP</h3>
        <input type="text" name="text" className='input-text' placeholder='input task'/>
        <button type="button" className='submit-button'>Add</button>
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        
    </div>
  )
}

export default Todo