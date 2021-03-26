# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#         api_session_index POST   /api/session(.:format)                                                                   api/session#create {:format=>:json}
#               api_session DELETE /api/session/:id(.:format)                                                               api/session#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json } do 
    resources :users, only: [:create]
    resources :session, only: [:create, :destroy]
    resources :videos, only:[:index]
    resources :movies, only:[:index]
    resources :genres, only:[:index]
    resources :lists, only:[:show, :create, :destroy]
  end
  
end
