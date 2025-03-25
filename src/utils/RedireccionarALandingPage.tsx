import { Redirect } from "react-router-dom";

export default function RedireccionarALandingPage(){
    return <Redirect to={{ pathname: '/'}}/>
}