# User(Inherit into Musician and Contractor)
- attributes: username password_digest first_name last_name type

# Musician
- has many job applications
- has many jobs, through job applications
- has one musician profile

# Contractor
- has many jobs

# Musician Profile
- belongs to musician
- attributes: location instrument bio:text media_url

# Job
- belongs to contractor
- has many job_applications
- has many musicians through job_applications
- attributes: title description:text date:date location budget:integer

# JobApplication
- belongs to job
- belongs to musician
- attributes: resume_url cover_letter_url accepted:boolean

## Single Table Inheritance (STI)

- Create a User model that acts as the base model for Musician and Contractor. The purpose of doing this is to encapsulate the authentication process for both Musician and Contractor to one User table. All of the attributes for both Contractor and Musician will go into this User table.

- Question: How do I establish foreign keys in my schema for belongs_to:musician and belongs_to:contractor if they are inherited from User?

- Answer: 

You should define the references like this instead:

create_table :generated_feedbacks do |t|
  t.references :teacher, references: :users
  …
end

The CreateEnglishGrades should use a similar approach:

create_table :english_grades do |t|
  t.references :teacher, references: :users
  t.references :student, references: :users
  …
end

The foreign keys then need to be defined separately:

add_foreign_key :english_grades, :users, column: :teacher_id
add_foreign_key :english_grades, :users, column: :student_id