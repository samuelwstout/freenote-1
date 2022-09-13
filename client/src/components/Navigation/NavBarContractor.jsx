import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

const NavBarContractor = ({setCurrentUser, currentUser}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        navigate('/')
      }
    })
  }

  return (
    <div>
        { currentUser &&
        <h1>{currentUser.username}</h1>
      }
        <ul>
          <li onClick={handleLogout}>Freenote</li>
            <li><Link to="/create_job">Create Job</Link></li>
            <li><Link to="/my_jobs">My Jobs</Link></li>
            <li><Link to="/contractor_profile">Profile</Link></li>
            <p><button onClick={handleLogout}>Logout</button></p>
        </ul>
    </div>
  )
}

export default NavBarContractor