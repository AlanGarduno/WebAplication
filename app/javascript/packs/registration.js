import React from 'react'; //importamos react
import ReatcDOM from 'react-dom';
import { Login } from '../components/registration/login';


class Registration extends React.Component{ //Todas las clases va cin mayuscula y heredad react Component para poder crear componentes
  render(){  //Toda clase de react o componente requiere implementar este metodo
    return <Login/>; //
  }
}

//Evento que dispara el muestreo del contenido en la ista
document.addEventListener('DOMContentLoaded',()=>{
  //Mostramos el componente en una vista, como parametros ReacDOm.render recibe el componente y una funcion que indique con que va a unir el componente
  //en este caso lo eleigimos por el id donde es un div con este id en la vista home.html.erb
    ReatcDOM.render(
      <Registration/>,document.getElementById('react-container'));
})
