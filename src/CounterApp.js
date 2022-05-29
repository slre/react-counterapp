import React, { useState } from 'react';
import PropTyes from 'prop-types';

const CounterApp = ( { value = 105 } ) => {

    //const [ name, setName ] = useState('Goku');
    //console.log(name,setName);
    const [ counter,setCounter ] = useState( value );
    

    const handleAdd = () => {
       // setCounter (counter+1 );
        setCounter ( (c)=>c+1 );
    }
    const handleSubs = (c) => {
         setCounter ( (c)=>c-1 )
    }
     const handleReset = () => {
        setCounter ( value );
    } 
    return ( 
        <>
            <h1> Counter App</h1>
            <h2>{ counter }</h2>
            {/* <button onClick={ (e) =>{ handleAdd(e) } } >+1</button> */}
            {/*
            handleAdd references the 'e' parameter
            */}
            <button onClick={  handleAdd } >+1</button>
            <button onClick={  handleSubs } >-1</button>
            <button onClick={  handleReset } >reset</button>
        </>

    );
}

CounterApp.propTypes = {
    value:PropTyes.number
}
// CounterApp.defaultProps = {
//     value:100
// }
export default CounterApp;