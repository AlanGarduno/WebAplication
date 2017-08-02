import React from 'react';
import {blueA400,redA400} from 'material-ui/styles/colors';

//estilos
export const styles = {
  buttonTop:{
    marginTop: '1em'
  },
  underLineStyle:{
    borderColor: blueA400,
  },
  floatingLabelFocusStyle:{
    color: blueA400,
  },
  leftSpace:{
    marginLeft: '1em'
  },
  red: redA400
}
//Clase base para el login y el sigup
export class Base extends React.Component {

  constructor(props){
    super(props) //Contructor del padre

    this.state ={  //propiedades que requieromos para otener la infromacion de nuestro formulario
      canSubmit:true,
      emal:'',
      password:'',
      passwordConfirmation:'',
      error:''
    }
  }


  enableSubmitBtn(){ //metodo para activar el boton
    this.setState({
      canSubmit:true
    });
  }

  disableSubmiBtn(){ //metodo para desactivar el boton
    this.setState({
      canSubmit:false
    });
  }

  syncEmail(ev){ //metodo para sincronizar los valores del text field con el de properties
    let element = ev.target;
    let value = element.value;
    this.setState({
      email:value
    })
  }


  syncPassword(ev){ //metodo para sincronizar los valores del text field con el de properties
    let element = ev.target;
    let value = element.value;
    this.setState({
      password:value
    })
  }

  //Se abstrae la funion de sincronizar elemento para cualquier elemento, ya no son requeridos los
  //dos metdos de arriba
  syncField(ev,fieldName){
    let element = ev.target;
    let value = element.value;

    let jsonState ={};
    jsonState[fieldName] = value;
    this.setState(jsonState)
  }
}
