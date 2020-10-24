import React from 'react'

function Todo(props) {

    const liStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5em',
    }

    const buttonStyle = {
        marginLeft: '10px',
        border: 'solid 1px',
        backgroundColor: 'white'

    }

    const handleRemoveClick = () => {
        props.removeTodo(props.id)
    }

    return (
        <div  key={props.todoID} style={liStyle}>
            {props.todo}
            <button style={buttonStyle} onClick = {handleRemoveClick}>Delete</button>
        </div>
    )
}

export default Todo
