# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string
#  airplane_id   :integer
#  origin        :string
#  destination   :string
#  date          :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Flight <ActiveRecord::Base
   has_many :reservations

   belongs_to :airplane
end
