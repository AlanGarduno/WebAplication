import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base, styles} from './base';
import reqwest from 'reqwest';

//Clase que se usa en registration.js, es la que retorna el render para pintar el codigo que esta contiene
export class Login extends Base {
  submit(){
    reqwest({  //Peticion de reqwest para enviar los datos
      url: '/users/sing_in',
      method: 'POST',
      data: {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      },
      headers:{
        'X-CSRF-Token': window.GetTokenRequest.token
      }
    }).then(data=>{
      console.log(data);
    }).catch(err => console.log(err));

  }

//Se mandan a llamar los metodos dependiendo el estado del form
  render(){
    return (<MuiThemeProvider>
      <Formsy.Form onValid={()=>this.enableSubmitBtn()}
            onValidSubmit={()=>this.submit()}
            onInvalid={()=>this.disableSubmiBtn()}>
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
        </div>
          <div>
            <RaisedButton
            style={styles.buttonTop}
            disabled = {!this.state.canSubmit}
            backgroundColor={styles.red}
            labelColor='#ffffff'
            type="submit"
            label="Iniciar sesión"
            />
            <a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Registrarme</a>
          </div>
      </Formsy.Form>
    </MuiThemeProvider>
  );}
}
