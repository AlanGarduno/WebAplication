
#Este archivo sirve para obtener el oken y solucionar el error de autenticacion con devise

window.GetTokenRequest or= {}; #Esto lo vuelve una variable global

#Obtiene el token necesario para la autenticacion
window.GetTokenRequest.token = document.querySelector('meta[name="csrf-token"]').content;
