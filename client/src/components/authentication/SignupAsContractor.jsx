import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignupAsContractor = ({ setCurrentUser }) => {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/api/signup_as_contractor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/create_job')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign up to hire talent</h1>
          <p>
            <label htmlFor='firstname'>First Name </label>
            <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </p>
          <p>
            <label htmlFor='lastname'>Last Name </label>
            <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </p>
          <p>
            <label htmlFor='username'>Username </label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </p>
          <p>
            <label htmlFor='password'>Password </label>
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </p>
          <p>
          <label htmlFor='password_confirmation'>Password Confirmation </label>
          <input type="text" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </p>
            <input type='submit'></input>
        </form>
        <h4>Already have an account? <button><Link to="/login">Log in</Link></button></h4>
    </div>
  )
}

export default SignupAsContractor