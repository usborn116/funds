class CreateFunds < ActiveRecord::Migration[7.0]
  def change
    create_table :funds do |t|
      t.string :name
      t.float :target
      t.float :allocated
      t.date :target_date

      t.timestamps
    end
  end
end
