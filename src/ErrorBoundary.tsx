import React, { ReactElement } from "react";
import { ErrorInfo } from "react";

export default class ErrorBoundary extends React.Component<any, errorBoundaryState> {
    constructor(props: any){
        super(props);
        this.state = { hayError: false, mensaje: ''}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error);
        console.log(errorInfo);        
    }

    static getDerivedStateFromError(error: any){
        return { hayError: true, mensaje: error }
    }

    render(){
        if(this.state.hayError){
            if(this.props.errorUI){
                return this.props.errorUI
            } else {
                return <h3>{ this.state.mensaje }</h3>
            }
        }

        return this.props.children;
    }
}

interface errorBoundaryState {
    hayError: boolean;
    mensaje: string;
}

interface errorBoundaryProps {
    errorUI?: ReactElement
}
