import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserRegData from "./UserRegData";

function Register1() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/UserRegData">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/UserRegData">
          <UserRegData/>
        </Route>
      </Routes>
    </Router>
  );
}

export default Register1;
