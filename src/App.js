import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/car.json'

class Contador extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.contadorInicial)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render () {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render () {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Propagando el state de nuestros componentes</p>
        <Contador contadorInicial={50} /> 
        <ConditionalSection/>
        <ul>
          {
            cars.map(car => {
              return (
                <li key={car.id}>
                  <p><strong>Nombre: </strong>{car.name}</p>
                  <p><strong>Marca: </strong>{car.company}</p> 
                </li>
              )
            })
          }
        </ul>

        </div>
       
      </div>
    );
  }
}


export default App;