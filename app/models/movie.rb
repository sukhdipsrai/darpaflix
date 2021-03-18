class Movie < ApplicationRecord
    has_many :movies_genres

    has_many :genres, through: :movies_genres

    has_one_attached :picture
    has_one_attached :trailer
    has_one_attached :media
end
