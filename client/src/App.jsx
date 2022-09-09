import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/Static/Landingpage';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/SignUp';
import SignupAsContractor from './components/Authentication/SignUpAsContractor';
import SignupAsMusician from './components/Authentication/SignUpAsMusician';
import CreateJob from './components/ContractorApp/CreateJob';
import MyJobs from './components/ContractorApp/MyJobs';
import FindWork from './components/MusicianApp/FindWork';
import MyApplications from './components/MusicianApp/MyApplications';
import ContractorProfile from './components/ContractorApp/ContractorProfile';
import MusicianProfile from './components/MusicianApp/MusicianProfile';

const App = () => {
const [currentUser, setCurrentUser] = useState(null)
const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage currentUser={currentUser} />} />
        <Route path="/signup" element={<Signup currentUser={currentUser} />} />
        <Route path="/signup_as_contractor" element={<SignupAsContractor setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup_as_musician" element={<SignupAsMusician setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/create_job" element={<CreateJob setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/my_jobs" element={<MyJobs />} />
        {/* When a contractor clicks on a job in 'my jobs'. /my_jobs/job/:id */}
        <Route path="/contractor_profile" element={<ContractorProfile />} />
        <Route path="/find_work" element={<FindWork setCurrentUser={setCurrentUser} currentUser={currentUser} loggedIn={loggedIn} />} />
        {/* When musician clicks 'apply' on a job posting (/find_work/job/:id) */}
        <Route path="/my_applications" element={<MyApplications loggedIn={loggedIn} />} />
        <Route path="/musician_profile" element={<MusicianProfile loggedIn={loggedIn} />} />
      </Routes>
  </Router>
  );
}

export default App;
