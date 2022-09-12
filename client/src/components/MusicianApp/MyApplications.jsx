import React from 'react';
import NavBarMusician from '../Navigation/NavBarMusician';

const MyApplications = ({setCurrentUser, currentUser}) => {



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