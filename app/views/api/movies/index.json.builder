json.array! @movies do |movie|
    json.extract video, :id ,:title, :cast, :director, :summary, :year, :duration, :genres
    json.imageUrl url_for(movie.picture)
    json.trailerUrl url_for(movie.trailer)
    json.mediaUrl url_for(movie.media)
end