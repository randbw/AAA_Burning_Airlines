class AddingTimeToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :time, :timestamp
  end
end
