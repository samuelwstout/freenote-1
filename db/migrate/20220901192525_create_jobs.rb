class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.string :date
      t.string :location
      t.string :budget
      t.string :resume_url
      t.string :cover_letter_url
      t.boolean :accepted
      t.belongs_to :musician, null: false, foreign_key: true
      t.belongs_to :contractor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
