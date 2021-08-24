import React, {useCallback, useState} from 'react';
import '../02-useEffect/effects.css';
import {ShowIncrement} from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCounter(state => state + num);
    }, [setCounter]);

    return (
        <div>
            <h1>Use CallBackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
