import React from 'react';
import logo from './logo.svg';
import Componente from './componets/Componente.js';
import Propiedad from './componets/Propiedades.js';

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
            <br/>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name"/>
            <br/>
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
      </section>
      </header>
      
    </div>
  );
}

export default App;
