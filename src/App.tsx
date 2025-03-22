import React, { useEffect, useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import ContenidoDinamico2 from './ContenidoDinamico2';

function App() {

  const [checked, setChecked] = useState(false);
  
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

    <ContenidoDinamico mostrarMensajeSecreto={true}></ContenidoDinamico>

    <ContenidoDinamico2 calificacion={99}></ContenidoDinamico2>
    <ContenidoDinamico2 calificacion={85}></ContenidoDinamico2>
    <ContenidoDinamico2 calificacion={70}></ContenidoDinamico2>

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
