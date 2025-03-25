import CrearActor from "./actores/CrearActor";
import EditarActor from "./actores/EditarActor";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGeenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from './peliculas/CrearPelicula';
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltrarPeliculas from "./peliculas/FiltrarPeliculas";

const rutas = [
    { path: "/generos", componente: IndiceGeneros, exact: true },
    { path: "/generos/crear", componente: CrearGenero, exact: true },
    { path: "/generos/editar", componente: EditarGenero, exact: true },
    { path: "/actores/", componente: IndiceActores, exact: true },
    { path: "/actores/crear", componente: CrearActor, exact: true },
    { path: "/actores/editar", componente: EditarActor, exact: true },
    { path: "/cines", componente: IndiceCines, exact: true },
    { path: "/cines/crear", componente: CrearCine, exact: true },
    { path: "/cines/editar", componente: EditarCine, exact: true },
    { path: "/peliculas/crear", componente: CrearPelicula, exact: true },
    { path: "/peliculas/editar", componente: EditarPelicula, exact: true },
    { path: "/peliculas/filtrar", componente: FiltrarPeliculas, exact: true },
    { path: "/", componente: LandingPage, exact: true }];

export default rutas;