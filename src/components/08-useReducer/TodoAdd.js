import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputchange, resetValue] = useForm({
        description: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false,
        });
        resetValue();
    }

    return (
        <>
            <h4>Agregar TODOS</h4>
                <hr/>

                <form onSubmit={onSubmit}>
                    <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={description}
                        onChange={handleInputchange}/>
                    
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                        >Agregar</button>
                </form>    
        </>
    )
}
