import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        task: ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setEdit({
            task: e.target.value
        })
    }

    const handleSubmit = () => {
        if (edit.task != '') {
            addTodo({...edit, id: Math.random() * 1000})
            setEdit({task: ''})
        }
        return
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && edit.task !== '') {
            addTodo({...edit, id: Math.random() * 1000})
            setEdit({task: ''})
        }
        return
    }

    return (
        <div>
            <input value = {edit.task} onChange={handleChange} onKeyPress={handleKeyPress}></input>
            <button onClick={handleSubmit}>
                Add
            </button>

        </div>
    )
}

export default TodoForm
