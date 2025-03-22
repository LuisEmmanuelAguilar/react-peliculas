import React, { useEffect, useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';

function App() {

  const [texto, setTexto] = useState('VALOR POR DEFECTO');
  const [checked, setChecked] = useState(false);
  
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  }

  const parteIntermedia = <EjemploReloj></EjemploReloj>

  const estilo = {
    background: 'red',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
  }
  const parteInferior = <div style={estilo}></div>

  return(
    <div>
      <h1>Hola Mundo</h1>

    <ProyectarContenido2
      parteSuperior={<span>Este es un mensaje del componente padre.</span>}
      parteIntermedia={parteIntermedia}
      parteInferior={parteInferior}
    ></ProyectarContenido2>
      <input type="text" 
        onKeyUp={(e) => manejarKeyUp(e) }
      />

    <MostrarTexto></MostrarTexto>

      <div>
        <input 
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)} 
          checked={checked} /> Este es un checkbox
      </div>
    </div>
  );
}

export default App;
