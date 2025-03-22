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

  const calificaciones = [
    {nombre: 'Mafalda', calificacion: 99},
    {nombre: 'Remi', calificacion: 85},
    {nombre: 'Logan', calificacion: 78},
    {nombre: 'Luna', calificacion: 60},
  ]

  return(
    <div>
      <h1>Hola Mundo</h1>

    <ContenidoDinamico mostrarMensajeSecreto={true}></ContenidoDinamico>

    { calificaciones.map(cal => <ContenidoDinamico2 key={cal.nombre} {...cal}></ContenidoDinamico2>)}

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
