class AddFKs < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :accounts, foreign_key: true
    remove_column :accounts, :user_id
  end
end
