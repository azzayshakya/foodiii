import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar';
import '../../Css/Auth.css';

const YourRestaurent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [button, setButton] = useState(true);
  const [credentials, setCredentials] = useState({ 
    resturentId: "", 
    MobileNo: "", 
    password: "" 
  });
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton(false);
    setShowPopup(true);

    try {
      const response = await fetch("https://foodiii.onrender.com/api/authenticateResturent", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      const json = await response.json();

      if (!json.success) {
        setShowPopup(false);
        setButton(true);
        alert("Enter valid credentials");
      } else {
        setShowPopup(false);
        setButton(true);
        localStorage.setItem("resturentId", credentials.resturentId);
        localStorage.setItem("authToken2", json.authToken2);
        navigate("/");
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setShowPopup(false);
      setButton(true);
      alert("An error occurred. Please try again.");
    }
  }

  const handleNameChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div className="auth-container">
      <Navbar />
      
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Login to your restaurant account</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-icon">
                <i className="fas fa-store"></i>
              </div>
              <input
                type="text"
                placeholder="Restaurant ID"
                name="resturentId"
                value={credentials.resturentId}
                onChange={handleNameChange}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <input
                type="text"
                placeholder="Mobile Number"
                name="MobileNo"
                value={credentials.MobileNo}
                onChange={handleNameChange}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">
                <i className="fas fa-lock"></i>
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleNameChange}
                required
              />
            </div>

            {showPopup ? (
              <div className="loading-container">
                <h3>Please Wait!</h3>
                <div className="loading-spinner"></div>
              </div>
            ) : (
              <button 
                type="submit" 
                className="auth-button"
                disabled={!button}
              >
                Login
              </button>
            )}
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
      
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
    </div>
  );
}

export default YourRestaurent;