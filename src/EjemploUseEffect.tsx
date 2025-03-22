import { useEffect } from 'react';

export default function EjemploUseEffect() {
    
    useEffect(() => {
        console.log('componente ha cargado');

        return () => {
            // se ejecuta al destruir el componente
            console.log('el componente se va a destruir')
        }
    })

    useEffect(() => {
        console.log('componente ha cargado 2');
    })

    return (
        <span>Ejemplo useEffect</span>
    )
}