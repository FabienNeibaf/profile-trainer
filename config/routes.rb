Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'pages#index'
  get '*path', to: 'pages#index'
end
