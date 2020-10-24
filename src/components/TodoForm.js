import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const inputStyle = {
        height: '30px',
    }

    const buttonStyle = {
        marginLeft: '10px',
        border: 'solid 1px',
        backgroundColor: 'white',
        height: '35px',

    }


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
            <input style={inputStyle} value = {edit.task} onChange={handleChange} onKeyPress={handleKeyPress}></input>
            <button style={buttonStyle} onClick={handleSubmit}>
                Add
            </button>

        </div>
    )
}

export default TodoForm
