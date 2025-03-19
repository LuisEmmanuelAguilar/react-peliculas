
export default function EjemploCSS() {

    const subtitulo = "Este es un subtitulo";

    const cuadradoNegro = {
        backgroundColor: 'black',
        width: '50px',
        height: '50px',
        marginLeft: '1rem'
      }

      return(
        <>
            <div className='cuadradoRojo'></div>
            <div style={{ backgroundColor: 'green', width: '50px', height: '50px', marginLeft: '1rem'}}></div>
            <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', marginLeft: '1rem'}}></div>

            <br />
            <div style={ cuadradoNegro }></div>
            <h4 style={{ color: 'blue'}}>{ subtitulo.toUpperCase() }</h4>
        </>
      );


}