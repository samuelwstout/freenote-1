import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../Navigation/NavBarMusician';

const MyApplications = ({setCurrentUser, currentUser}) => {

const navigate = useNavigate()

useEffect(() => {
  if (!currentUser) {
      navigate('/')
  }
}, [currentUser, navigate])

  return (
    <div>
       <NavBarMusician setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <h2>My applications</h2>
        <h3>Headline           status: insert status</h3>
        <p>So on...</p>
    </div>
  )
}

export default MyApplications