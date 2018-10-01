class AddLikesToTracklists < ActiveRecord::Migration[5.2]
  def change
    add_column :tracklists, :likes,:integer
  end
end
