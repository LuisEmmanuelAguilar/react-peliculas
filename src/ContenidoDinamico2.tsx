export default function ContenidoDinamico2(props: any){
    if(props.calificacion > 90){
        return (
            <div>
                <h3>{ props.nombre} Excelente Calificacion</h3>
            </div>
        )
    } else if(props.calificacion >= 80 && props.calificacion <= 90){
        return(
            <div>
                <h3>{ props.nombre} Muy bien hecho.</h3>
            </div>
        )
    } else if(props.califiacion >= 0 && props.calificacion < 80) {
        return (
            <div>
                <h3>{ props.nombre} Lol...</h3>
            </div>
        )
    } else {
        throw `Ha habido un error con la calificacion de ${props.nombre}`;
    }
}