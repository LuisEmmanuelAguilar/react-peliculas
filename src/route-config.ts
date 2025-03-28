import CrearActor from "./actores/CrearActor";
import EditarActor from "./actores/EditarActor";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from './peliculas/CrearPelicula';
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltrarPeliculas from "./peliculas/FiltrarPeliculas";
import RedireccionarALandingPage from "./utils/RedireccionarALandingPage";

const rutas = [
    { path: "/generos/crear", componente: CrearGenero, exact: true },
    { path: "/generos/editar/:id(\\d+)", componente: EditarGenero, exact: true },
    { path: "/generos", componente: IndiceGeneros, exact: true },
    { path: "/actores/crear", componente: CrearActor, exact: true },
    { path: "/actores/editar/:id(\\d+)", componente: EditarActor, exact: true },
    { path: "/actores/", componente: IndiceActores, exact: true },
    { path: "/cines/crear", componente: CrearCine, exact: true },
    { path: "/cines/editar/:id(\\d+)", componente: EditarCine, exact: true },
    { path: "/cines", componente: IndiceCines, exact: true },
    { path: "/peliculas/crear", componente: CrearPelicula, exact: true },
    { path: "/peliculas/editar/:id(\\d+)", componente: EditarPelicula, exact: true },
    { path: "/peliculas/filtrar", componente: FiltrarPeliculas, exact: true },
    { path: "/", componente: LandingPage, exact: true },
    { path: '*', componente: RedireccionarALandingPage }
];

export default rutas;