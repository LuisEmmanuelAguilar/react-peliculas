import './App.css';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas';

function App() {

  const peliculasEnCartelera: pelicula[] = [
    {
      id: 1, titulo: 'Spider-Man: Far from Home',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      id: 2, titulo: 'Moana',
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ];

  const peliculasProximosEstrenos: pelicula[] = [
    {
      id: 3, titulo: 'Soul',
      poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ];

  return(
    <>
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={peliculasEnCartelera}/>

      <h3>Proximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculasProximosEstrenos}/>
    </>
  );
}

export default App;
