class AddFKsforFunds < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :fund, foreign_key: true
    add_reference :funds, :user, foreign_key: true 
  end
end
