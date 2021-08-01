import React, { Component } from 'react'

class Reloj extends Component{
    // constructor(props){
    //     super(props);
    // }
    
    componentWillUnmount(){
        console.log(3,"El componenete ha sido eliminado del DOM");
    }

    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componenete se inicializa, aun no esta en el DOM");
        this.state={
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;
    }

    componentDidMount(){
        console.log(1,"El componenete ya se encuentra el DOM");
    }

    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado o las props del componenete han cambiado");
        console.log(prevProps,"props y el state es",prevState);
    }


    tiktak = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }

    iniciar = () => {
        this.tiktak();
        this.setState({
            visible:true,
        })
    }
    
    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible:false,
        })
    }

    render(){
        console.log(4,"El componenete se dibuja o redibuja por algun cambio en el DOM");
        return (
            <>
            <h2>Ciclo de vida de los Componentes de clase</h2>
            {this.state.visible && <Reloj hora={this.state.hora} />}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}