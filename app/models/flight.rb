class Flight <ActiveRecord::Base
   has_many :reservations

   belongs_to :airplane
end
