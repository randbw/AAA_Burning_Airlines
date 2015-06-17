class AddColumnToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :child, :boolean
  end
end
