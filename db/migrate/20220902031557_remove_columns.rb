class RemoveColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :jobs, :resume_url
    remove_column :jobs, :cover_letter_url
    remove_column :jobs, :accepted
  end
end
