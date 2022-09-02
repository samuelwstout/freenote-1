class RemoveMusiciansFkFromJobs < ActiveRecord::Migration[7.0]
  def change
    if foreign_key_exists?(:jobs, :musicians)
      remove_foreign_key :jobs, :musicians
    end
  end
end
