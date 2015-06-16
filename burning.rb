system('rails g scaffold flight flight_number:string airplane_id:integer origin:string destination:string date:datetime ')
system('rails g scaffold airplane name:string rows:integer column:integer ')
system('rails g scaffold user email:string password_digest:string admin:boolean ')
system('rails g scaffold reservation row:integer column:integer seatID:string flight_id:integer user_id:integer ')

          File.open('app/models/flight.rb', 'w') do |file|
            file.puts('class Flight <ActiveRecord::Base')
file.puts('   has_many :reservations')
file.puts('end')
end

          File.open('app/models/airplane.rb', 'w') do |file|
            file.puts('class Airplane <ActiveRecord::Base')
file.puts('   has_many :flights')
file.puts('end')
end

          File.open('app/models/user.rb', 'w') do |file|
            file.puts('class User <ActiveRecord::Base')
file.puts('   has_many :reservations')
file.puts('   has_many :flights, :through => :reservations')
file.puts('end')
end

          file = File.read('app/models/reservation.rb')
          filtered = file.gsub(/end/, '')
          File.open('app/models/reservation.rb', 'w') do |f|
            f.write(filtered)
          end
          File.open('app/models/reservation.rb', 'a') do |l|l.puts('   belongs_to :flight')
l.puts('end')
end

          file = File.read('app/models/flight.rb')
          filtered = file.gsub(/end/, '')
          File.open('app/models/flight.rb', 'w') do |f|
            f.write(filtered)
          end
          File.open('app/models/flight.rb', 'a') do |l|l.puts('   belongs_to :airplane')
l.puts('end')
end

          file = File.read('app/models/reservation.rb')
          filtered = file.gsub(/end/, '')
          File.open('app/models/reservation.rb', 'w') do |f|
            f.write(filtered)
          end
          File.open('app/models/reservation.rb', 'a') do |l|l.puts('   belongs_to :user')
l.puts('end')
end
system('rake db:create')
system('rake db:migrate')