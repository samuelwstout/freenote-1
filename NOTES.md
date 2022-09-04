## Models
- User
- Musician
- Contractor
- MusicianProfile
- Job
- JobApplication

# User
- Attributes: user_id:integer type username password_digest first_name last_name 

# Musician
- has many contractors through jobs
- has many job_applications
- has many jobs through job_applications
- has one musician_profile

# Musician Attributes
- first_name
- last_name
- username
- password_digest

# MusicianProfile
- belongs to Musician
- Attributes: instrument location bio:text media_url

# Contractor
- has many jobs
- has many musicians through jobs

# Contractor Attributes
- first_name
- last_name
- username
- password_digest

# Job
- belongs to contractor
- has many job_applications
- has many musicians through job_applications

# Job attributes
- title
- description:text
- date
- location
- budget
- musician:belongs_to
- contractor:belongs_to

# JobApplication
- belongs to job
- belongs to musician

# JobApplication attributes
- resume_url
- cover_letter_url
- accepted:boolean
- musician:belongs_to
- job:belongs_to