import React,{Component,PureComponent} from "react";
import PropTypes from 'prop-types';

const ANIMAL_IMAGES ={
    cat: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
    dolphin: 'http://4.bp.blogspot.com/-hfW9FyxhxnA/T9CGpSAgUzI/AAAAAAAACd4/H282htZT3pU/s1600/delfin-lengua-fuera.jpg',
    panda: 'https://nationalzoo.si.edu/sites/default/files/styles/slide_1400x700/public/support/adopt/giantpanda-03.jpg'
}

const ANIMALS= Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent{
    state={ src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps){
        if(this.props.animal !== nextProps.animal){
            this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
        }

    }

    componentWillUpdate(nextProps,nextState){
        const img = document.querySelector('img')
        console.log('from img element', {alt: img.alt})
        img.animate([ {
            filter: 'blur(0px)'
        }, {filter:'blur(2px)'}],{
            duration:500,
            easing: 'ease'
        })
    }

    componentDidUpdate(nextProps,nextState){
        const img = document.querySelector('img')
        img.animate([ {
            filter: 'blur(2px)'
        }, {filter:'blur(0px)'}],{
            duration:1500,
            easing: 'ease'
        })

    }

    /* No se necesita cuando se utiliza PuComponent, ya que este por defecto realiza esta comparacion
    shouldComponentUpdate(nextProps){
        return this.props.animal !== nextProps.animal
    }
    */

    render (){
        return (
            <div>
                <p>Selected {this.props.animal} </p>
                <img alt={this.props.animal} src={this.state.src} width='250' />
            </div>
        )
    }

}

AnimalImage.propTypes={
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloDeActualización extends Component{
    state={ animal:'panda' }
    _renderAnimalButton = (animal)=>{
        return(
            <button
            //disabled={animal === this.state.animal}
            key={animal} 
            onClick={ () => this.setState({animal})}>
                {animal}
            </button>
        )
    }
    render(){
        return(
            <div>
                <h4>Ciclo de actualización, Ejemplo de: ComponentWillReceiveProps</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}

export default EjemploDeCicloDeActualización