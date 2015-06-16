Rails.application.routes.draw do
  root :to => 'pages#landing'
  resources :users do
    resources :reservations
  end
  resources :airplanes
  resources :flights
end
