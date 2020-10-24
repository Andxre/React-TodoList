import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    

    const addTodo = todo => {
        if (todo !== '') 
            setTodos([todo, ...todos])
    }

    const removeTodo = (todoID) => {
        setTodos(todos.filter(todo => todoID !== todo.id))
    }


    return (
        <div>
            <TodoForm addTodo = {addTodo}/>
            
            {todos.map(todo => 
                <Todo key={todo.id} id = {todo.id} todo={todo.task} removeTodo={removeTodo} />
            )}
    
        </div>
    )
}

export default TodoList
