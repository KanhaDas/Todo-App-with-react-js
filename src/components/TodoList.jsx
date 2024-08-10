import React from 'react'

const TodoList = ({todo,todos,handleDelete,handleEdit}) => {
  return (
    <ul className='allTodos'>
      {
todos.map((t)=>(<li className='text'> <span className='singleTodos' key={t.id}>{t.todo}</span><button onClick={()=>handleEdit(t.id)}>Edit</button>
      <button onClick={()=>handleDelete(t.id)}>Delete</button></li>))
      }
      
        </ul>
  )
}

export default TodoList