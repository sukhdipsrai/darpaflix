class Api::SearchController < ApplicationController
    before_action :require_logged_in

    def show

        query = sanitize( params[:id] )
        genres = Genre.all.select("name").map{|ele| ele.name}      
        match = genres.select{ |g| g.downcase.include?(query)}
        
        matches_movies = []
        Movie.all.each do |movie|
            movie_genres = movie.genres
            movie_genres.each do |genre|
                if(match.include?(genre.name))
                    matches_movies << movie;
                    break;
                    # Check against cast, title
                end
            end
        end
        if (matches_movies.length == 0)
            render json: ['No Matches'], status: 200 
        else
            @movies = matches_movies
            render :index
        end
    end

    def sanitize (query)
        # TODO: more ways to sanitize search?, https://rubular.com/
        return query.downcase
    end

end