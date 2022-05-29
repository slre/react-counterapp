


const nombre   = 'Ysmir';
const apellido = 'Wulfhart';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre ='Talos') {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );