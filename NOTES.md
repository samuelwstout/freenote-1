## Models
- Musician
- Contractor
- Job

# Musician
- has many contractors through jobs
- has many job_applications
- has many jobs through job_applications

# Musician Attributes
- first_name
- last_name
- username
- password_digest
- instrument
- location
- bio:text
- media_url

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



