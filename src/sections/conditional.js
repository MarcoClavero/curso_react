/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component} from "react";

class LoginButton extends Component{
    render(){
        return(
            <button type="button" class="btn btn-primary">Iniciar Sesión</button>
        )
    }
}

class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido usuario!</p>
                <button type="button" class="btn btn-primary"> Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor(){
        super()
        this.state={mostrarA: false}
    }
    render (){
        return(
            <div>
                {this.state.mostrarA ? <LogoutButton/> : <LoginButton/>}
            </div>
        )
    }
}