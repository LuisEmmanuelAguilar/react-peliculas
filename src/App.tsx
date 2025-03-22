import React, { useEffect, useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';
import ContenidoDinamico2 from './ContenidoDinamico2';
import ErrorBoundary from './ErrorBoundary';

function App() {

  const [texto, setTexto]= useState('Valor por defecto');
  const [checked, setChecked] = useState(true);
  
  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  const calificaciones = [
    {nombre: 'Mafalda', calificacion: 99},
    {nombre: 'Remi', calificacion: 85},
    {nombre: 'Logan', calificacion: -1},
    {nombre: 'Luna', calificacion: 82}
  ]

  return(
    <>
      <h1>Hola Mundo</h1>

    { calificaciones.map (cal => 
      <ErrorBoundary key={cal.nombre} >
        <ContenidoDinamico2  {...cal }/>
      </ErrorBoundary>
    )}

    <ValorContext.Provider value={texto}>
      <Abuelo></Abuelo>
    </ValorContext.Provider>

      <div>
        <input 
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)} 
          checked={checked} /> Mostrar componente useEffect
      </div>

  { checked ? <EjemploUseEffect /> : null}
    

    <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)}></FormularioTexto>
    <MostrarTexto texto={texto}></MostrarTexto>

     <div>
        <input 
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)} 
          checked={checked} /> Este es un checkbox
      </div>
    </>
  );
}

export default App;
