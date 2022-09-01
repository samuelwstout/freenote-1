class Musician < ApplicationRecord
    has_many :jobs
    has_many :contractors, through: :jobs

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
