import React from 'react'

const Todo = ({todo , removeTodo}) => {

  const handleDelete = () => {
    removeTodo(todo.id)
  }




  return (
    <div>
        
        <h2> {todo.description} </h2>
        <h6> {todo.id} </h6>

        <button onClick={handleDelete}> Delete </button>

        <hr/>


    </div>
  )
}

export default Todo