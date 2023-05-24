import  "./CreateEventStyle.css";

import React, { useState } from 'react';

function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    SocialEvent:'',
    name: '',
    email: '',
    startDate: '',
    endDate: '',
    description: '',
    photos: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, photos: event.target.files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="form-container1" onSubmit={handleSubmit}>
      <label>
        SocialEvent:
    <select id="event" name="event" required>
    <option value="">Select event</option>
    <option value="Marathon">Marathon</option>
    <option value="Art festival">Art festival</option>
    <option value="Blood Donation ">Blood Donation </option>
    <option value="Beach cleaning">Beach cleaning</option>
  </select>
      </label>
      <label>
        Organiser:
        <input type="text"  Organiser="name" value={formData. Organiser} onChange={handleInputChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <label>
        Venue:
        <input type="text"  Venue="name" value={formData. Venue} onChange={handleInputChange} />
      </label>
      <label>
        Photos:
        <input type="file" name="photos" onChange={handleFileChange} multiple />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EventRegistrationForm;

