class Api::SessionController < ApplicationController

    # protect_from_forgery :except => [:create, :destroy]
    # skip_before_action :verify_authenticity_token

    def create
        
        @user = User.find_by_credentials(user_params["email"], user_params["password"])
        if @user.nil?
          render json: ['Wrong Username or Password, or both.'], status: 401
        else
          login!(@user)
          render 'api/users/create';
        end
        
    end
    
    def destroy
        
        logout!
        render json: {message: 'Logged Out!'}
    end

    def user_params
        params.require(:user).permit(:email,:password)
    end

end
