import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({edwin}) => {
    const saludo = 'Hola mundo'; 
    const noel = {
        nombre: 'Edwin Ramos',
        edad: 23
    }
    return (
        <>
            <h1> { edwin }</h1>
            <h1> {JSON.stringify(noel)} </h1>
            <p>Que p2</p>
            <div id='counterCmp'>

            </div>
        </>
    );
}
PrimeraApp.prototype = {
    saludo : PropTypes.string.isRequired
}
//Se prefiere usar la desestructuracion en vez de esto
/*const PrimeraApp = (props) => {
    const saludo = 'Hola mundo'; 
    const edwin = {
        nombre: 'Edwin Ramos',
        edad: 23
    }
    return (
        <>
            <h1> {props.saludo}</h1>
            <h1> {JSON.stringify(saludo)} </h1>
            <p>Que p2</p>
        </>
    );
}*/
export default PrimeraApp;