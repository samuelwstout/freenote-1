import React from 'react';
import NavBarMusician from '../Navigation/NavBarMusician';

const FindWork = () => {
  return (
    <div>
       <h2>Hey, current musician!</h2>
        <NavBarMusician />
        <input placeholder='search'></input>
        <input type='submit'></input>

        <div>
            <h2>Headline</h2>
            <h3>budget</h3>
            <h3>date</h3>
            <h3>location</h3>
            <h3>Bio</h3>
            <button>Save Job</button>
            <button>Apply</button>
        </div>
        <p>So on...</p>
    </div>
  )
}

export default FindWork