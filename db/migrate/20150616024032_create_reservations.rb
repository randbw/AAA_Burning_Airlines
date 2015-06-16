class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :row
      t.integer :column
      t.string :seatID
      t.integer :flight_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
