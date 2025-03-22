export default function ContenidoDinamico(props: any){
    return(
        <div>
            {props.mostrarMensajeSecreto ? <span>Mostrar Mensaje Secreto: 69</span> : null}
        </div>
    )
}