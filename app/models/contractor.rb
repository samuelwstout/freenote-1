class Contractor < ApplicationRecord
    has_many :jobs
    has_many :musicians, through: :jobs

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
