import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../Navigation/NavBarContractor';

const MyJobs = ({currentUser, setCurrentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  return (
    <div>
        <NavBarContractor setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <h1>My Jobs</h1>
        <h2>Jobs go here</h2>
    </div>
  )
}

export default MyJobs