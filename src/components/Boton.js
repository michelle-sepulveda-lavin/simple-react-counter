import React from 'react';

const Boton = props => {
    return (
            <div className="col-10 col-md-3 m-auto">
                <button onClick={props.funcion}>{props.label}</button>
            </div>
    )
};

export default Boton;