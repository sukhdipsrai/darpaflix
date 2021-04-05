class Api::SearchController < ApplicationController
    before_action :require_logged_in

    def show

        query = sanitize( params[:id] )
        genres = Genre.all.select("name").map{|ele| ele.name}      
        match = [];
        genres.each{ |g| 
             query.each do |q|   
               if (g.downcase.include?(q))
                 match << g;
                 break;
               end
             end
         }

        matches_movies = []
        Movie.all.each do |movie|
            found= false;
            movie.genres.each do |genre|
                if(match.include?(genre.name))
                    matches_movies << movie;
                    found = true;
                    break;
                    # Check against cast, title
                end
            end
            if (!found)
                query.each do |q|
                    if( movie.cast.downcase.include?(q) || movie.director.downcase.include?(q) || movie.title.downcase.include?(q) || movie.year.to_s == q)
                        matches_movies << movie;
                        found = true;
                        break;
                    end
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
        return query.downcase.gsub(/[^a-z0-9\s]/, ' ').split(" ")
    end

end