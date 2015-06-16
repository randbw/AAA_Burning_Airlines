# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Airplane.destroy_all
Flight.destroy_all
Reservation.destroy_all


u1 = User.create email: 'admin@site', password_digest: 'password', admin: true
a1 = Airplane.create name: 'VA733', rows: 40, columns: 4
f1 = Flight.create flight_number: 'VP100', origin: 'Sydney', destination: 'Melbourne', date: '2015-06-20'
f2 = Flight.create flight_number: 'VP104', origin: 'Sydney', destination: 'Perth', date: '2015-06-20'
r1 = Reservation.create row: 15, column: 2, seatID: 'B15'



u1.reservations << r1
f1.reservations << r1
a1.flights << f1 
a1.flights << f2 
