class Movie < ApplicationRecord
    validates :title, uniqueness: { scope: :year}
    has_many :movies_genres, :dependent => :destroy

    has_many :genres, through: :movies_genres

    has_many :my_lists
    has_many :users ,through: :my_lists

    has_one_attached :picture
    has_one_attached :trailer
    has_one_attached :media
end
