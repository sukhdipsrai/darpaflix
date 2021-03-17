class Movie < ApplicationRecord
    has_and_belongs_to_many :genres
    has_one_attached :picture
    has_one_attached :trailer
    has_one_attached :media
end
