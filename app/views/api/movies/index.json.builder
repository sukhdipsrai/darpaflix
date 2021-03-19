json.array! @movies do |video|
    json.extract video, :id
    json.photoUrl url_for(video.photo)
end