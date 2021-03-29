class MoviesGenre < ApplicationRecord
  validates :movie_id, uniqueness: { scope: :genre_id}, presence: true
  validates :genre_id, presence: true
  belongs_to :movie
  belongs_to :genre
end
