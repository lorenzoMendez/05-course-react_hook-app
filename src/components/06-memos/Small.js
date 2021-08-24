


import React, {memo} from 'react';

export const Small = memo(({value}) => {

    console.log("Se vuelve a llamar");

    return (
        <small>
            {value}
        </small>
    )
});