class ChingingFieldTypeForDateAndTime < ActiveRecord::Migration
  def change
    change_column :flights, :date, :date
    change_column :flights, :time, :time
  end
end
