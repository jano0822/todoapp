import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(value);
      setValue('');
    };
      
  return (
    <form className='AddTodo' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} required/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default AddTodo
