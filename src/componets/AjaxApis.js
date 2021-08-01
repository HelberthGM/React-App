import React, { Component } from 'react'

// Componente Pokemon que deberia ir en un archivo independiente
function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component{
    state = {
        pokemons: [],
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            // console.log(json);
            json.results.forEach(el => {
                fetch(el.url)
                .then(res => res.json())   
                .then((json) => {
                    // console.log(json)
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                    let pokemons = [...this.state.pokemons, pokemon]
                    // Como la variable se llama igual que el estado no es necesario usar pokemons:pokemons
                    this.setState({pokemons})
                    });
            });
        });
    };

    render(){
        return(
            <>
            <h2>Peticiones asincronas en Componentes de Clase</h2>
            { this.state.pokemons === 0?(
            <h3>Cargando...</h3>
            ):(
            this.state.pokemons.map(el =>
            <Pokemon avatar={el.avatar} name={el.name} key={el.id}/>)
            )}
            </>
        )
    }
}