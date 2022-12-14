import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  return (
    <div>
      <h1>Join as musician or contractor</h1>
        <button><Link to="/signup_as_contractor">I'm a contractor, hiring for a project</Link></button>
        <button><Link to="/signup_as_musician">I'm a musician, looking for work</Link></button>
    </div>
  )
}

export default SignUp