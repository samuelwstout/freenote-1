class DropMusicians < ActiveRecord::Migration[7.0]
  def change
    drop_table :musicians
  end
end
