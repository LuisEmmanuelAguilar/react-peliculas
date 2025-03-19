import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';

function App() {

  const [texto, setTexto] = useState('');
  const [checked, setChecked] = useState(false);
  
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  }

  return(
    <div>
      <h1>Hola Mundo</h1>
  
      <input type="text" 
        onKeyUp={(e) => manejarKeyUp(e) }
      />

      <div>
        {texto}
      </div>
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
