Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do

    get "/me", to: "musicians#show"
    post "/signup", to: "musicians#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
end
