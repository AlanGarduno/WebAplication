import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base, styles} from './base';
import reqwest from 'reqwest';

//Clase que se usa en registration.js, es la que retorna el render para pintar el codigo que esta contiene
export class SingUp extends Base {
//Se mandan a llamar los metodos dependiendo el estado del form
submit(){
  reqwest({  //Peticion de reqwest para enviar los datos
    url: '/users',
    method: 'POST',
    data: {
      user: {
        email: this.state.email,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      }
    },
    headers:{
      'X-CSRF-Token': window.GetTokenRequest.token
    }
  }).then(data=>{
    console.log(data);
  }).catch(err => console.log(err));

}

  render(){
    return (<MuiThemeProvider>
      <Formsy.Form onValid={()=>this.enableSubmitBtn()}
            onInvalid={()=>this.disableSubmiBtn()}
            onValidSubmit={()=>this.submit()}>
      <div>
          <div>
              <FormsyText
              onChange={(e)=>this.syncField(e,"email")}
              name="email"
              required
              floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
              underlineFocusStyle = {styles.underLineStyle}
              validations="isEmail"
              validationError="Correo no válido"
              floatingLabelText="Correo electrónico"/>
          </div>

          <div>
              <FormsyText
              onChange={(e)=>this.syncField(e,"password")}
              name="password"
              required
              floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
              underlineFocusStyle = {styles.underLineStyle}
              type="password"
              floatingLabelText="Contraseña"/>
          </div>


          <div>
              <FormsyText
              onChange={(e)=>this.syncField(e,"passwordConfirmation")}
              name="passwordConfirmation"
              required
              floatingLabelFocusStyle = {styles.floatingLabelFocusStyle}
              underlineFocusStyle = {styles.underLineStyle}
              type="password"
              floatingLabelText="Confirmar contraseña"/>
          </div>
        </div>
          <div>
            <RaisedButton
            style={styles.buttonTop}
            disabled = {!this.state.canSubmit}
            backgroundColor={styles.red}
            labelColor='#ffffff'
            type="submit"
            label="Crear Cuenta"
            />
            <a href="#" onClick={this.props.toggle} style={styles.marginLeft}> Ya tengo Cuenta</a>
          </div>
      </Formsy.Form>
    </MuiThemeProvider>
  );}
}
