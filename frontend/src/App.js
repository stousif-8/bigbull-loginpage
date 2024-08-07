import React, { useState } from "react";
import Biography from "./Biography";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    dob: "",
    gender: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Registration successful");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="App">
      <center>
        <h1>A Login Page created by Syed Tousif</h1>
        <form onSubmit={handleSubmit}>
          <big>
            <label>Name</label>
          </big>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />

          <big>
            <label>Email</label>
          </big>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <big>
            <label>Password</label>
          </big>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            minLength="2"
            maxLength="6"
            required
          />
          <br />

          <big>
            <label>Phone Number</label>
          </big>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />

          <big>
            <label>Age</label>
          </big>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />

          <big>
            <label>DOB</label>
          </big>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <br />

          <big>
            <label>Gender</label>
          </big>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === "male"}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />{" "}
          Female
          <br />

          <big>
            <label>Agree to Terms</label>
          </big>
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
          />
          <br />

          <button type="submit">Sign in</button>
        </form>
      </center>
      <Biography />
    </div>
  );
}

export default App;

