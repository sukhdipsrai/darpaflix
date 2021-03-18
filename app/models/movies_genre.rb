class MoviesGenre < ApplicationRecord
  belongs_to :movie
  belongs_to :genre
end
