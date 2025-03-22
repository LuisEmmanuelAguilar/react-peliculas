import React, { useEffect, useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import ContenidoDinamico2 from './ContenidoDinamico2';
import FormularioTexto from './FormularioTexto';

function App() {

  const [texto, setTexto]= useState('Valor por defecto');
  const [checked, setChecked] = useState(false);
  
  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  return(
    <div>
      <h1>Hola Mundo</h1>

    <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)}></FormularioTexto>
    <MostrarTexto texto={texto}></MostrarTexto>

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
