import React, { Component } from 'react'

// Los Componenetes deberian ir en archivos independientes
function LogIn() {
    return(
        <div>
            <h3>LogIn</h3>
        </div>
    )
} 

function LogOut() {
    return(
        <div>
            <h3>LogOut</h3>
        </div>
    )
} 

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);

        this.state={
            session:true,
        }

    }

    render() {
        return (
            <div>
                <h2>Renderizado condicional</h2>

                {this.state.session ? <LogIn/>:<LogOut/> }
            </div>
        )
    }
}

