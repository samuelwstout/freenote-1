import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarContractor from '../Navigation/NavBarContractor';

const ContractorProfile = ({currentUser, setCurrentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  return (
    <div>
      <NavBarContractor currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <h3>First name: First name</h3>
        <h3>Last name: Last name</h3>
        <h3>Email: email</h3>
        <h3>Password: password</h3>
        <button>Edit account</button>
        <button>Delete account</button>
    </div>
  )
}

export default ContractorProfile