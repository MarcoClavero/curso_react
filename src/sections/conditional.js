/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component} from "react";

class LoginButton extends Component{
    render(){
        return(
            <button  onClick={()=> alert('Hi here')}>Iniciar Sesión</button>
        )
    }
}

class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido usuario!</p>
                <button > Cerrar Sesión</button>
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