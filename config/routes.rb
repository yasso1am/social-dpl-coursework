Rails.application.routes.draw do

  namespace :api do
    resources :posts
  end

  get '*other', to: 'static#index'
end
