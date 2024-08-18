import React, { useState } from 'react'

const UpdateTodo = ({updateTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      e.preventDefault();
      updateTodo(value, task.id);
      setValue('');
    };

  return (
    <form onSubmit={handleSubmit} className="AddTodo">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' required/>
    <button type="submit" className='todo-btn'>Update Task</button>
  </form>
  )
}

export default UpdateTodo
