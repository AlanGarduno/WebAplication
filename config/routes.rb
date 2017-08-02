Rails.application.routes.draw do
  devise_for :users  #Devise agrega esta ruta como parte de la configuracion

  authenticated :user do #Se intercambian las visas, esta sintaxis es definida por la gema devise
     root "main#dashboard", as: :authenticated_root 
  end

  root "main#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
