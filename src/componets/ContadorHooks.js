import React,{ useState } from 'react';

// el componente puede recibir proppiedades(props) ya que es un componenete funcional
// se pasan en los parametros de la funcion
export default function ContadorHooks(props){
    // El useState puede recibir cualquier valor como parametro inicial
    const [contador, setContador] = useState(0)
    //console.log(useState());
    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);

    return(
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </nav>
        <p>Contador de {props.titulo}:</p>
        <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps={
    titulo:"Clicks",
}