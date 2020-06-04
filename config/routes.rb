Rails.application.routes.draw do
   namespace :api, defaults: {format: :json} do
   resources :reviews, only: [:create, :destroy]
   resources :businesses, only: [:create,:destroy]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
   end
   
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
