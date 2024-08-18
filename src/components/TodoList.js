import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({task, completeTodo, deleteTodo, updateTodo}) => {
  return (
    <div className='TodoList'>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTodo(task.id)}
        style={{
          appearance: 'none',
          width: '15px',
          height: '15px',
          border: '1px solid #fff', 
          borderRadius: '4px',
          outline: 'none',
          cursor: 'pointer',
          backgroundColor: task.completed ? '#8BC1A1' : 'transparent',
        }}
      />
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => completeTodo(task.id)}>{task.task}</p>
      <div>
        {task.completed ? null : <FontAwesomeIcon icon={faPenToSquare} className='update-icon' onClick={() => updateTodo(task.id)} />}
        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default TodoList
