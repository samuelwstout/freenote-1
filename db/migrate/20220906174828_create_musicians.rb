class CreateMusicians < ActiveRecord::Migration[7.0]
  def change
    create_table :musicians do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :instrument
      t.text :bio
      t.string :media_url

      t.timestamps
    end
  end
end
