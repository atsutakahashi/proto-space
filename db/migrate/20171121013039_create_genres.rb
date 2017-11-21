class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.references :prototype, foreign_key: true, null: false
      t.references :tag, foreign_key: true, null: false
      t.timestamps
    end
  end
end
