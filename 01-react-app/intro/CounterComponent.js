import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterComponent = ({counter})=>{

    const [counterr, setCounter] = useState(0);
    const sumar = ()=>{
        //setCounter(counterr + 1);
        setCounter( (c)=> c + 1);
    }  
    const restar = ()=>{
        //setCounter(counterr + 1);
        setCounter( (c)=> c - 1);
    }  
    const reset = ()=>{
        //setCounter(counterr + 1);
        setCounter( (c)=> c = 0);
    } 
    const accion = (as)=>{
        //setCounter(counterr + 1);
        if(as == 'sumar'){
            setCounter( (c)=> c + 1);
        }
        if(as == 'restar'){
            setCounter( (c)=> c - 1);
        }
        if(as == '0'){
            setCounter( (c)=> c = 0);
        }
    }        
    return (
        <>
            <h1> Counter Component</h1>
            <p>{ counterr }</p>
            <button onClick={ sumar }> + </button>
            <button onClick={ restar }> - </button>
            <button onClick={ reset }> 0 </button>
        </>
    );
}
CounterComponent.prototype = {
    saludo: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired
}
CounterComponent.defaultProps = {
    counter: 0
}

export default CounterComponent; 