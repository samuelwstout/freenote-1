class DropJobApplications < ActiveRecord::Migration[7.0]
  def change
    drop_table :job_applications
  end
end
