import React, { Component } from 'react'

export class EventosEs6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)

    }

    sumar(event){
        // console.log(this);
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar(event){
        this.setState({
            contador: this.state.contador-1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

// Lo de abajo de esta linea deberia ir en otro archivo
// Properties Inicializer

export class EventosEs7 extends Component{
    state = {
        contador: 1
    }

// arrow functions
    porDos = (event)=>{
        // console.log(this);
        this.setState({
            contador: this.state.contador*2,
        });
    }

    sobreDos = (event)=>{
        this.setState({
            contador: this.state.contador/2,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sobreDos}>÷2</button>
                    <button onClick={this.porDos}>x2</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

// otro Componente, deberia estar en otro archivo
// function Boton(props) {
//     console.log(props);
//     return <button onClick={props.myOnClick}>Boton hecho componente</button> 
// }
// es igual a:
// const Boton = (props) => <button onClick={props.myOnClick}>Boton hecho componente</button>
// y a:
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton hecho componente</button>

// otro Componente (deberia ir en otro archivo)
export class MasEventos extends Component{
    handleClick = (e,msj) => {
        // console.log(e);
    //     console.log(e.target);
    //     console.log(e.nativeEvent);
    //     console.log(e.nativeEvent.target);
        console.log(msj);
    }

    render() {
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,"Paramentro pasado desde evento")} >Saludar</button>
                {/* Evento perzonalizado */}
                <Boton myOnClick={(e) =>
                    this.handleClick(e,"Paramentro pasado desde evento")
                    } />
            </div>
        )
    }
}