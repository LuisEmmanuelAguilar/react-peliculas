import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL = "https://images.seeklogo.com/logo-png/14/1/tool-logo-png_seeklogo-140866.png";

  return(
    <div>
      <h1>Hola Mundo</h1>
      <h4>{ subtitulo }</h4>
      <h3>El doble de 3 es {duplicar(3)}</h3>
      <img src={imagenURL} alt="logoTool" />
      <div>
        <input type="checkbox" checked={true}/>Este es un checkbox
      </div>
    </div>
  );
}

export default App;
