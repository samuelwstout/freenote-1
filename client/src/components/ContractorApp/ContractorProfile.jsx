import React from 'react';
import NavBarContractor from '../Navigation/NavBarContractor';

const ContractorProfile = () => {
  return (
    <div>
      <NavBarContractor />
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