## Models
- Musician
- Contractor
- Job

# Musician
- has many jobs
- has many contractors through jobs

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
- belongs to musician
- belongs to contractor

# Job attributes
- title
- description:text
- date
- location
- budget
- resume_url
- cover_letter_url
- accepted:boolean
- musician:belongs_to
- contractor:belongs_to