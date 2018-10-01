Rails.application.routes.draw do

  devise_for :users


namespace :api do
resources :tracklists
end



scope '/api' do
  resources :tracklists
post 'user_token' => 'user_token#create'
end






end
