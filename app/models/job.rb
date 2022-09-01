class Job < ApplicationRecord
  belongs_to :musician
  belongs_to :contractor
end
