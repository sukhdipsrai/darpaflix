json.array! @videos do |video|
    json.extract video, :id
    json.photoUrl url_for(video.photo)
end