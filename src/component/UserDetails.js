import React, { useState } from 'react';

function UserRegistrationForm() {
  // Initialize state variables for form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can write the code to handle the form submission,
    // for example, send the form data to a server or perform some
    // validation before submitting.
    console.log('Form submitted:', name, email, phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <lable classname="R_name" >Register for Event</lable>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistrationForm;
