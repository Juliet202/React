import React from 'react';

const Helloworld = (props) => {
    return (
        <div>
            <h1>Hello {props.mensaje}</h1>
        </div>
    );
};

export default Helloworld;