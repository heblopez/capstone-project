Rails.application.routes.draw do
    get "/health" => "health#health"

    post "/login" => "sessions#create"
    get "/logout" => "sessions#destroy"

    resources :users, only: %i[create]
end
