class CreateGenreMovieJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_movie_joins do |t|

      t.timestamps
    end
  end
end
