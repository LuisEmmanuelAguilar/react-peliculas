import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const cuadradoNegro = {
    backgroundColor: 'black',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
  }

  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL = "https://images.seeklogo.com/logo-png/14/1/tool-logo-png_seeklogo-140866.png";

  return(
    <div>
      <h1 className='rojo'>Hola Mundo</h1>
      
      <div className='cuadradoRojo'></div>
      <div style={{ backgroundColor: 'green', width: '50px', height: '50px', marginLeft: '1rem'}}></div>
      <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', marginLeft: '1rem'}}></div>

      <br />
      <div style={ cuadradoNegro }></div>

      <h4 style={{ color: 'blue'}}>{ subtitulo.toUpperCase() }</h4>
      <h3>El doble de 3 es {duplicar(3)}</h3>
      <img src={imagenURL} alt="logoTool" />
      <div>
        <input type="checkbox" checked={true}/>Este es un checkbox
      </div>
    </div>
  );
}

export default App;
