import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';

function App() {

  let texto = "";

  const manejarClick = () => console.log('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    texto = e.currentTarget.value;
  }

  return(
    <div>
      <h1>Hola Mundo</h1>
  
      <button onClick={ manejarClick }>Click on me!</button>
      <button
        onMouseEnter={() => console.log('entrado')} 
        onClick={() => console.log('click desde el boton')}>Click con funcion anonima desde el boton</button>
      
      <input type="text" 
        onKeyUp={(e) => manejarKeyUp(e) }
      />

      <div>
        {texto}
      </div>

    </div>
  );
}

export default App;
