class DropJobsTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :jobs
  end
end
