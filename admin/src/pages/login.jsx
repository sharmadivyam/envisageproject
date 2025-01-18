import React, { useState } from 'react';
import "./login.css";
const LoginComponent = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    rollNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login successful!`);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    alert('Registration successful! You can now login.');
    setIsRegistering(false);
  };

  return (
    <div className="container">
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'student' ? 'active' : ''}`}
          onClick={() => setActiveTab('student')}
        >
          Student
        </button>
        <button 
          className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
      </div>

      {activeTab === 'student' && !isRegistering && (
        <form onSubmit={handleLogin} className="form-container">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="student@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
          <p className="toggle-text">
            Don't have an account?
            <a href="#" onClick={() => setIsRegistering(true)} className="toggle-link">Sign Up</a>
          </p>
        </form>
      )}

      {activeTab === 'student' && isRegistering && (
        <form onSubmit={handleSignUp} className="form-container">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              className="input-field"
              placeholder="12345"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="student@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
          <p className="toggle-text">
            Already have an account?
            <a href="#" onClick={() => setIsRegistering(false)} className="toggle-link">Login</a>
          </p>
        </form>
      )}

      {activeTab === 'admin' && (
        <form onSubmit={handleLogin} className="form-container">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="admin@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginComponent;
