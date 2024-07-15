import React, { useState } from 'react'


const AddTodoForm = ({add}) => {
    

    const [todoInput , setTodoInput] = useState({
        description : "",
    })


    const handleChangeInput = (e) => {
        setTodoInput({
            ...todoInput,
            [e.target.name] : e.target.value
        })        

    }

    const handleAdd = () => {
        add(todoInput)
    }

  return (
    <div>
        <h1> Add New Task </h1>

        <input type="text" placeholder='Write your new task' name='description' onChange={handleChangeInput}/>

        <button onClick={handleAdd}> Add New Task </button>




    </div>
  )
}

export default AddTodoForm