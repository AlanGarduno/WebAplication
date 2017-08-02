import React from 'react'; //importamos react
import ReatcDOM from 'react-dom';
import { Login } from '../components/registration/login';
import { SingUp } from '../components/registration/singup';
import WebpackerReact from 'webpacker-react'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin(); //Para solucionar el error

class Registration extends React.Component{ //Todas las clases va cin mayuscula y heredad react Component para poder crear componentes
  constructor(props){
    super(props)

    this.state = {
      showLogin: true
    }
    this.toggle = this.toggle.bind(this); //Nos aseguramo que this en toggle simpre sea nuestro componente
  }

  toggle(e){ //Funcion que intercambia entre la vista del login y la vista del singUp
    e.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin
    })

  }

  render(){  //Toda clase de react o componente requiere implementar este metodo
    return (<div>
            { this.state.showLogin ?
             <Login toggle={this.toggle}/> :
             <SingUp toggle={this.toggle}/>
           }
          </div>
        ); //clase login.js donde esta el codigo del templete al igula que sigUp
  }
}

//Forma usando ReactDOM
//Evento que dispara el muestreo del contenido en la ista
//document.addEventListener('DOMContentLoaded',()=>{
  //Mostramos el componente en una vista, como parametros ReacDOm.render recibe el componente y una funcion que indique con que va a unir el componente
  //en este caso lo eleigimos por el id donde es un div con este id en la vista home.html.erb
  //  ReatcDOM.render(
  //    <Registration/>,document.getElementById('react-container'));
//})


//Los mismo que arriba pero usando webpacker-react
//Pero ahora no se vera, require incluirse en flujo de rails para renderizar el templete en home.html.erb
WebpackerReact.setup({Registration});
