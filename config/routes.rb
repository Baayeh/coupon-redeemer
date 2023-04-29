Rails.application.routes.draw do
  resources :coupons, only: %i[index create update]

  get "coupons/random", to: "coupons#random"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
