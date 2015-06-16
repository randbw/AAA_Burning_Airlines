class RenameColumnInAirplanes < ActiveRecord::Migration
  def change
    rename_column :airplanes, :column, :columns
  end
end
