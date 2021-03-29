json.array! @movies do |movie|
    json.extract movie, :id ,:title, :cast, :director, :summary, :year, :duration, :genres
    json.imageUrl url_for(movie.picture)
    json.trailerUrl url_for(movie.trailer)
    json.mediaUrl url_for(movie.trailer)
end