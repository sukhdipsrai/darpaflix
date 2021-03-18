class CreateMoviesGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :movies_genres do |t|
      t.references :movie, foreign_key: true
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
