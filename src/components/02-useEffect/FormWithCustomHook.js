import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = values;

    useEffect(() => {
        console.log("El email ha sido cambiado");
    }, [email]);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="correo@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
