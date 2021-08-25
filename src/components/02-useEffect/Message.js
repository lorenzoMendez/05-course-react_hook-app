
import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x: 0, y: 0});
    const {x, y} = coors;

    useEffect(() => {
        console.log("componente montado!");
        
        const mouseMove = (event) => {
            // console.log(event);
            const coors = {x: event.x, y: event.y};
            console.log(coors);
            setCoors(coors);
        }
        
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            console.log(" componente desmontado!");
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    )
}
