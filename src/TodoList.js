import React from 'react'
import Todo from './Todo'

const TodoList = ({data , removeTodo}) => {
    console.log('data', data)
  return (
    <div style={{"marginTop":"50px"}}>

        {
            data.map((todo , i)=>(
                <Todo todo={todo} removeTodo={removeTodo} key={i}/>
            ))
        }


    </div>
  )
}

export default TodoList