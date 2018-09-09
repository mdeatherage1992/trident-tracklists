class CreateTracklists < ActiveRecord::Migration[5.2]
  def change
    create_table :tracklists do |t|
      t.string :title
      t.string :url
      t.string :genre
      t.text :tracklist
      t.timestamps
    end
  end
end
