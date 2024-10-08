
import React, { useState } from 'react'
import "./App.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  const [todo,setTodo]=useState("");
  const [todos, setTodos]=useState([]);
  const [editId,setEditId]=useState(0)

  const handleSubmit=(e)=>{
     e.preventDefault();

     if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updatedTodos=todos.map((t)=>t.id===editTodo.id
      ?(t={id:t.id,todo}):{id:t.id,todo:t.todo})
      setTodos(updatedTodos)
      setEditId(0);
      setTodo("");
      return
     }

     if(todo !=''){
      setTodos([{id:`${todo}-${Date.now()}` , todo},...todos])
      setTodo("")
     }
}
const handleDelete=(id)=>{
  const deleteTodo=todos.filter((to)=>to.id !==id);
  setTodos([...deleteTodo]);
}

const handleEdit=(id)=>{
   const editTodo=todos.find((i)=>i.id===id);
   setTodo(editTodo.todo)
   setEditId(id);
}
  return (
   <div className="app">
    <div className="container">
     <h1>Todo List App</h1>
    
     <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId}/>
   
    <TodoList todo={todo} todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
  
    </div>
   </div>
  )
}

export default App;