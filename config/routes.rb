# == Route Map
#
#                Prefix Verb   URI Pattern                                     Controller#Action
#                  root GET    /                                               pages#landing
#     user_reservations GET    /users/:user_id/reservations(.:format)          reservations#index
#                       POST   /users/:user_id/reservations(.:format)          reservations#create
#  new_user_reservation GET    /users/:user_id/reservations/new(.:format)      reservations#new
# edit_user_reservation GET    /users/:user_id/reservations/:id/edit(.:format) reservations#edit
#      user_reservation GET    /users/:user_id/reservations/:id(.:format)      reservations#show
#                       PATCH  /users/:user_id/reservations/:id(.:format)      reservations#update
#                       PUT    /users/:user_id/reservations/:id(.:format)      reservations#update
#                       DELETE /users/:user_id/reservations/:id(.:format)      reservations#destroy
#                 users GET    /users(.:format)                                users#index
#                       POST   /users(.:format)                                users#create
#              new_user GET    /users/new(.:format)                            users#new
#             edit_user GET    /users/:id/edit(.:format)                       users#edit
#                  user GET    /users/:id(.:format)                            users#show
#                       PATCH  /users/:id(.:format)                            users#update
#                       PUT    /users/:id(.:format)                            users#update
#                       DELETE /users/:id(.:format)                            users#destroy
#             airplanes GET    /airplanes(.:format)                            airplanes#index
#                       POST   /airplanes(.:format)                            airplanes#create
#          new_airplane GET    /airplanes/new(.:format)                        airplanes#new
#         edit_airplane GET    /airplanes/:id/edit(.:format)                   airplanes#edit
#              airplane GET    /airplanes/:id(.:format)                        airplanes#show
#                       PATCH  /airplanes/:id(.:format)                        airplanes#update
#                       PUT    /airplanes/:id(.:format)                        airplanes#update
#                       DELETE /airplanes/:id(.:format)                        airplanes#destroy
#               flights GET    /flights(.:format)                              flights#index
#                       POST   /flights(.:format)                              flights#create
#            new_flight GET    /flights/new(.:format)                          flights#new
#           edit_flight GET    /flights/:id/edit(.:format)                     flights#edit
#                flight GET    /flights/:id(.:format)                          flights#show
#                       PATCH  /flights/:id(.:format)                          flights#update
#                       PUT    /flights/:id(.:format)                          flights#update
#                       DELETE /flights/:id(.:format)                          flights#destroy
#

Rails.application.routes.draw do

  root :to => 'pages#landing'

  resources :users do
    resources :reservations
  end
  resources :airplanes
  
  resources :flights

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
