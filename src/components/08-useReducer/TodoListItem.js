import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item">
            <p 
                className={`${todo.done && 'complete'}`} 
                onClick={() => handleToggle(todo.id)}
            >{index + 1}. {todo.desc}</p>
            <button 
                onClick={() => handleDelete(todo.id)} 
                className="btn btn-danger"
            >Eliminar</button>
        </li>
    )
}
