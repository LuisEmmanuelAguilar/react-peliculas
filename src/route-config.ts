import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGeenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas = [
    { path: "/generos", componente: IndiceGeneros, exact: true },
    { path: "/generos/crear", componente: CrearGenero, exact: true },
    { path: "/generos/editar", componente: EditarGenero, exact: true },
    { path: "/", componente: LandingPage, exact: true }];

export default rutas;