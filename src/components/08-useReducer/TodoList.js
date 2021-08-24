import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ol className="list-group list-group-flush">
            {
                todos.map((todo, index) => {
                    return <TodoListItem 
                        key={todo.id} 
                        todo={todo} 
                        index={index} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}/>
                })
            }
        </ol>
    )
}
