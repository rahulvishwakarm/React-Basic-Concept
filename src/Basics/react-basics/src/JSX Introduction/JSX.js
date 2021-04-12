import React from 'react';

function JSX() {
    const name = "TestingName";
    const element = <p>Hello , {name}</p>;
    return (
        <div>
            <p>{element}</p>
        </div>
    )
}

export default JSX;