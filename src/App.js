import React from 'react';
import logo from './logo.svg';
import Componente from './componets/Componente.js';
import Propiedad from './componets/Propiedades.js';
import Estado from './componets/Estado'
import RenderizadoCondicional from './componets/RenderizadoCondicional'
import RenderizadoElementos from './componets/RenderizadoElementos';
import {EventosEs6, EventosEs7, MasEventos} from './componets/Eventos';
import ComunicacionComponentes from './componets/ComunicacionComponentes'

import './App.css';




function App() {
  let saludo = "Bienvenido";
  let auth = true;
  let estaciones = ["Invierno","Verano","Otoño","Primavera"];

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <span>{saludo}</span>
            <hr/>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name"/>
            <hr/>
          </div>
          <p>{auth ? "El usuario esta logueado":"El usuario no esta logueado"}</p>
          <p>2 + 1 = {2+1}</p>
          <ul>
            {/* pasar el index como key es una mala practica */}
            {estaciones.map((estacion,index) => (
              <li key={index}>{estacion}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

      <section>
        <Componente msg="Soy un componente :D"/>  
        <hr/>
        <Propiedad 
        cadena="Soy una string" 
        num={10}
        boolean={true} 
        array={[2,3,5]}
        obj={{nombre:"Leonardo",apellido:"DiCaprio"}}
        reactElement={<i>Elemento react</i> }
        function={numero => numero*numero} 
        componenteReact={<Componente  msg="Componente agregado desde react"/>}
        compDos={<Componente  msg="Componente dos "/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosEs6/>
        <hr/>
        <EventosEs7/>
        <hr/>
        <MasEventos/>
        <hr/>
        <ComunicacionComponentes/>
      </section>
      </header>
      
    </div>
  );
}

export default App;
