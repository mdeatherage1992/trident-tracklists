Rails.application.routes.draw do
namespace :api do
resources :tracklists
end

# post '/login' => "sessions#create"
# delete '/logout' => "sessions#destroy"
# get '/profile' => 'users#profile'
# resources :users

end
