Rails.application.routes.draw do
  devise_for :users
  namespace :api do 
    namespace:v1 do 
      resources :items, only: [:index, :create, :destroy, :update]
      resources :ratings, only: [:index, :create, :destroy, :update]
    end 
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
