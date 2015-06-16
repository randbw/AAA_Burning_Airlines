# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  admin           :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User <ActiveRecord::Base
   has_many :reservations
   has_many :flights, :through => :reservations
   has_secure_password
   validates :email, :presence => true
   validates :email, :uniqueness => true
end
