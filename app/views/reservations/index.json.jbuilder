json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :row, :column, :seatID, :flight_id, :user_id
  json.url reservation_url(reservation, format: :json)
end
