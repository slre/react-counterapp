import React, { Fragment } from 'react';
import PropTyes from 'prop-types';

const FirstApp = ( { greet,subtitle  } ) => {
    const obj = {
        name:'Logan',
        alias:'Wolverine'
    };

    return ( 

        <>
            <h1>{ greet }</h1>
            <p>{ subtitle }</p>
        </>

    );
}

FirstApp.propTypes = {
    greet:PropTyes.string.isRequired
}
FirstApp.defaultProps = {
    subtitle:`I am a subtitle`
}
export default FirstApp;