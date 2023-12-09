// Home.js
import React, { useState } from 'react';
import './home.css'; // Import your CSS file
import {  toast } from 'react-toastify';
const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address:'',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        
        toast.success('Lead submitted successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Failed to submit lead', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div id="lead-form-container" className="container">
      <h2 className="heading">Create Lead</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" required />
        </label>
        <label className="label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" required />
        </label>
        <label className="label">
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="input-field" required />
        </label>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Home;
