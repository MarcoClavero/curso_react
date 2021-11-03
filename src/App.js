import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Forms from './sections/forms';
//import ConditionalSection from './sections/conditional';
//import cars from './data/car.json'
import PropTypes from 'prop-types'

class Box extends Component{
  render(){
    return(
      <div style={{border:'1px solid #09f', margin:5, padding:5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component{
  static propTypes ={
    author: PropTypes.string.isRequired
  }
  constructor(props){
    super(props)
    if(typeof props.author === 'undefined'){
      console.warn('author prop is required')
      throw new Error('author prop is required')
    }
  }
  render(){
    const {author,children,date,title}= this.props
    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}


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
  constructor (){
    super()
    this.state = { mouseX: 0, mouseY: 0}
    //this.handleMouseMove=this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const { clientX, clientY}=e
    this.setState({ mouseX:clientX, mouseY:clientY})
  }

  handleClick (e){
    alert('Hi here')
  }
  render () {
    return (
      <div className="App">
        <div className="App-header" onMouseMove={this.handleMouseMove}
          style={{border:' 1px solidd #000',padding:10}}>
          <Article
            author='Marco'
            date={new Date().toLocaleDateString()}
            title='Artículo sobre props children'
            >
              <p>Contenido envuelto dentro del Article</p>

          </Article>
          
          <Forms/>

          {/*
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Propagando el state de nuestros componentes</p>
          */}

        
        {/*  
        <button onClick={this.handleClick}>Hi here!</button>
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
        */}

        </div>
       
      </div>
    );
  }
}


export default App;