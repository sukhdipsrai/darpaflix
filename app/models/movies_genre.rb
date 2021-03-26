class MoviesGenre < ApplicationRecord
  validates :movie_id, uniqueness: { scope: :genre_id}
  belongs_to :movie
  belongs_to :genre
end
