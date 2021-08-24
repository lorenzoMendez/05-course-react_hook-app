

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import {useCounter} from '../../hooks/useCounter';

export const Layout = () => {
    
    const {counter, increment} = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data} = useFetch(url);
    const {quote} = !!data && data[0];

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize(pRef.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <div className="blockquote text-right">
                <p
                    ref={pRef}
                    className="mb-3"
                >
                    {quote}
                </p>
            </div>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button onClick={increment} className="btn btn-primary">Siguiente quote</button>

        </div>
    )
}
