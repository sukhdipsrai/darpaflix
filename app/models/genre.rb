class Genre < ApplicationRecord
    validates :name, uniqueness: true
    has_many :movies_genres
    
    has_many :movies, through: :movies_genres
end
