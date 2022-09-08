Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    # From lesson: resources :posts, only: [:index]

    # get "/me", to: "users#show"
    post "/signup_as_contractor", to: "contractors#create"
    # post "/login", to: "sessions#create"
    # delete "/logout", to: "sessions#destroy"
  end
end
