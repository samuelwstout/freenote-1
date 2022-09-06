class RemoveColumnsFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :location
    remove_column :users, :instrument
    remove_column :users, :bio
    remove_column :users, :media_url
  end
end
