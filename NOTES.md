# Musician
- has many job applications
- has many jobs, through job applications

# Musician Attributes
- username
- password_digest
- first_name
- last_name
- location
- instrument
- bio:text
- media_url

# Contractor
- has many jobs

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