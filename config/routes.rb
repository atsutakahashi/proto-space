Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  resources :prototypes, only: [:index, :new, :create, :show, :destroy, :edit, :update] do
    resources :comments, only: [:new, :create, :edit, :update, :destroy]
  end
  resources :users, only: [:show, :edit, :update,]
  resources :likes, omly: [:create, :destroy]
end
