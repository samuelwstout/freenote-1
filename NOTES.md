
# User Attributes (Inherit into Musician and Contractor)
- username
- password_digest
- first_name
- last_name
- location
- instrument
- bio:text
- media_url
- type

# Musician
- has many job applications
- has many jobs, through job applications

# Contractor
- has many jobs

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


## Single Table Inheritance (STI)

- Create a User model that acts as the base model for Musician and Contractor. The purpose of doing this is to encapsulate the authentication process for both Musician and Contractor to one User table. All of the attributes for both Contractor and Musician will go into this User table.

