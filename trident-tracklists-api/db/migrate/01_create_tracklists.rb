class CreateTracklists < ActiveRecord::Migration[5.2]
  def change
    create_table :tracklists do |t|
      t.string :title
      t.string :url
      t.string :genre
      t.text :tracklist
      t.integer :user_id
      t.integer :likes, :default => 0
      t.index :user_id
      t.timestamps
    end
  end
end
