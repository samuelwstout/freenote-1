class User < ApplicationRecord
    scope :contractors, -> { where(type: 'Contractor') } # User.contractors
    scope :musicians, -> { where(type: 'Musician') } # User.musicians
end
