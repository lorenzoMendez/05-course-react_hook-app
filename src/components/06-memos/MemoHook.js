

import React, {useState, useMemo} from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';
import {highProcess} from '../../helpers/highProcess';

export const MemoHook = () => {

    const {counter, increment } = useCounter(5000);
    const [show, setShow] = useState(false);

    const memoProcess = useMemo(() => highProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <p>{memoProcess}</p>

            <button
                className="btn btn-outline-primary" 
                onClick={increment}>+1</button>

            <button 
                className="btn btn-outline-primary ml-5"
                onClick={() => {setShow(!show) }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
