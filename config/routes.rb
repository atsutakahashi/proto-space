Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'
  # get 'prototypes' => 'prototypes#newest'
  resources :prototypes, only: [:index, :new, :create, :show, :destroy, :edit, :update] do
    collection do
      get 'newest'
    end
    resources :comments, only: [:new, :create, :edit, :update, :destroy]
  end
  resources :users, only: [:show, :edit, :update,]
  resources :likes, only: [:create, :destroy]
end
