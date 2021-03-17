class CreateGenreMovieJoins < ActiveRecord::Migration[5.2]
  def change
    create_join_table :genres,:movies do |t|
      t.timestamps
    end
  end
end
