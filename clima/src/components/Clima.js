import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // extraer los valores
    const { name, main } = resultado;
    if(!name)return null;

    // Grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p>Temperatura Maxima: 
                    { parseFloat(main.temp_max - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p>Temperatura Minima: 
                    { parseFloat(main.temp_min - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>

        </div>

     );
}

Clima.prototype = {
    resultado: PropTypes.object.isRequired
}

export default Clima;