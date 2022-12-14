import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMusician from '../Navigation/NavBarMusician';

const MusicianProfile = ({currentUser, setCurrentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
        navigate('/')
    }
}, [currentUser, navigate])

  return (
    <div>
      <NavBarMusician currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <h3>First name: Insert here</h3>
        <h3>Last name: Insert here</h3>
        <h3>Password: Insert here</h3>
        <h3>Instrument(s): Insert here</h3>
        <h3>Location: Insert here</h3>
        <h3>Bio: Insert here</h3>
        <h3>Media: Insert</h3>
        <button>Edit account</button>
        <button>Delete account</button>
    </div>
  )
}

export default MusicianProfile