class Musician < ApplicationRecord
    has_many :job_applications
    has_many :jobs, through: :job_applications 

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
