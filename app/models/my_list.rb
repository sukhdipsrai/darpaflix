class MyList < ApplicationRecord
  validates :movie_id, uniqueness: { scope: :user_id}
  belongs_to :movie
  belongs_to :user
end
