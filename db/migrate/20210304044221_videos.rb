class Videos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.timestamps
    end

  end
end
