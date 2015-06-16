class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.integer :airplane_id
      t.string :origin
      t.string :destination
      t.datetime :date

      t.timestamps null: false
    end
  end
end
