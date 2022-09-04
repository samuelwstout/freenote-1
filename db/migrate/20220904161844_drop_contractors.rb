class DropContractors < ActiveRecord::Migration[7.0]
  def change
    drop_table :contractors
  end
end
