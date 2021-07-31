import React,{Component} from 'react';



export default class Padre extends Component{
    state = {
        contador: 0,
    }

    IncrementarContador = () => {
        this.setState({
            contador: this.state.contador+1,
        })
    }

    render(){
        return (
        <>
            <h2>Comunicacion entre componentes</h2>
            <p>Contador: <b>{this.state.contador}</b></p>
            <Hijo 
            IncrementarContador={this.IncrementarContador}
            msj="Mensaje del componenete hijo"/>
            <Hijo 
            IncrementarContador={this.IncrementarContador}
            msj="Mensaje del componenete hijo 2"/>
        </>
    )}
}

function Hijo(props) {
    return (
    <>
    <h3>{props.msj}</h3>
    <button onClick={props.IncrementarContador}>Incrementar contador</button>
    </>
    )}
