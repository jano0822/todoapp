import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import UpdateTodo from './UpdateTodo'
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEdit: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const updateTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo))
    }

    const updateTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEdit: !todo.isEdit} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const completeTodo = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <AddTodo addTodo={addTodo} />
        {todos.length === 0 ? null : <h2>Task List</h2>}
        {todos.map((todo) => (
            todo.isEdit ? (
                <UpdateTodo updateTodo={updateTask} task={todo} />
            ) : (
                <TodoList task={todo} key={todo.id} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            )
            
        ))}
    </div>
  )
}

export default TodoWrapper
