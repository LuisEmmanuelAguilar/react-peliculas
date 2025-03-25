import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas = [
    { path: "/generos", componente: IndiceGeneros, exact: true },
    { path: "/", componente: LandingPage, exact: true }];

export default rutas;