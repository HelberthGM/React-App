import React from 'react';
// import PropTypes from 'prop-types';


export default function Propiedades(props) {
    return (
    <div>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>Numero: {props.num}</li>
            <li>{props.boolean ? 'El valor es verdadero':'El valor es falso'}</li>
            <li>Array: {props.array.join(', ')} </li>
            <li>Objeto: {` ${props.obj.nombre} - ${props.obj.apellido}`} </li>
            <li>Función: {props.array.map(props.function).join(', ')}</li>
            <li>{props.reactElement}</li>
            <li>{props.componenteReact}</li>
            <li>{props.compDos}</li>
            
        </ul>
    </div>
)}

Propiedades.defaultProps = {
    porDefecto: "Props por defecto",
}

// Propiedades.propTypes ={
//     num: propTypes.number.isRequire,
// };