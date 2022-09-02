# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# contractor account creation
contractor = Contractor.create(username: 'contractor100', password: 'password', first_name: 'Contractor FN', last_name: 'Contractor LN')

# contractor creates job
job = Job.create(title: 'Job title', description: 'Job description', date: '9/2/22', location: 'Job location', budget: 'Job budget', contractor_id: contractor.id)

# musician account creation
musician = Musician.create(username: 'musician100', password: 'password', first_name: 'Musician FN', last_name: 'Musician LN', instrument: 'instrument1', location: 'location1', bio: 'bio1', media_url: 'mediaurl1')

# musician applies for job
job_application = JobApplication.create(resume_url: 'resume', cover_letter_url: 'cover letter', accepted: false, musician_id: musician.id, job_id: job.id)