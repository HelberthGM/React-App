import React, { Component } from 'react';
import data from './helpers/data.json';

// Conponente individual (deberia tener su propio archivo)
function ElementoLista(props) {
    return(
        <li>
            <a href={props.el.url} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            seasons:["Winter","Summer","Autumn","Spring"]
        }
    }

    render(){
        // console.log(data);
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año:</h3>
                <ul>
                    {/* Pasar el index como key es una mala practica */}
                    {this.state.seasons.map((el) => <li key={el}>{el}</li>)}
                </ul>
                <h3>Frameworks Frontend JS:</h3>
                <ul> 
                    {data.frameworks.map(el => <ElementoLista key={el.id}  el={el}/>)}
                </ul>
            </div>
        )
    } 
}

