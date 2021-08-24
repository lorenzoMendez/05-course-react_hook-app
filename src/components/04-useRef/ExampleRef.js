
import React, {useState} from 'react';
import '../02-useEffect/effects.css';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';

export const ExampleRef = () => {

    const [show, setShow] = useState(false);

    const handlClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>Example Ref</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-outline-primary mt-2" 
                onClick={handlClick}
            >Show/Hide</button>
        </div>
    )
}
