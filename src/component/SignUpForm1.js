import React, {useState} from "react";
import "./sign-upstylesheet.css";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    if(password.length <= 7){
      console.log("Password must contain 8 characters");
      alert("Password must contain 8 characters");
  }
    event.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      
    } 
    if(firstName && lastName && email && password && confirmPassword){
      console.log("firstName: "+ firstName, "lastname :" +lastName, "Email: " + email, "password: " + password, "ConfirmPassword: " +confirmPassword  )

    }
   if (password != confirmPassword) {
      console.log("Passswaord should be same ");
      alert("Password does not match");
    } else {
      // Handle sign up logic here
    }
  };

  return (<>
    <form className="signup-container" onSubmit={handleSubmit}>
      <h2 className="title">Sign Up</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <label className="lable1" htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button className="S-btn" type="submit">SignUp</button>
       </form>
      <button className="link-btn" onClick={()=> props.onFormSwitch('Login')}>Already have an account/login here</button>
      </>
  );
};
export default SignUp;