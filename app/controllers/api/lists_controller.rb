class Api::ListsController < ApplicationController
    before_action :require_logged_in

    def show
        @user = User.find(params[:id])
        @movies = @user.movies
        render :show
    end

    def create
        @user = User.find(params.require(:data).permit(:id)[:id])
        @movie = Movie.find(media_params[:media_id])
        @user.my_lists.create(movie: @movie)
        render json: ['Success'], status: 200 
    end

    def destroy
        begin
            User.find(params[:id]).my_lists.find_by(movie_id: media_params[:media_id]).delete()
            render json: ["#{params[:id]}"], status: 200 
        rescue 
            render json: ['List Item Does Not Exist.'], status: 404 
        end
    end

    def media_params
        params.require(:data).permit(:media_id)
    end
end
