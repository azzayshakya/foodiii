import React, { useState } from 'react';
import '../Css/Signup.css';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Loader.css';

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", geolocation: "", password: "", MobileNo: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [button, setButton] = useState(true);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasUnique = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 10;
    return hasUppercase && hasUnique && isLongEnough;
  };

  const validateMobileNo = (mobileNo) => {
    const isTenDigits = /^\d{10}$/.test(mobileNo);
    return isTenDigits;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateMobileNo(credentials.MobileNo)) {
      setError("Mobile number must be exactly 10 digits long.");
      return;
    }

    if (!validatePassword(credentials.password)) {
      setError("Password must be at least 10 characters long, contain at least one uppercase letter, and one unique character.");
      return;
    }

    setError("");
    setButton(false);
    setShowPopup(true);

    const response = await fetch("https://foodiii.onrender.com/api/creatuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        location: credentials.geolocation,
        password: credentials.password,
        MobileNo: credentials.MobileNo
      })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      setShowPopup(false);
      setButton(true);
      alert("Enter valid credentials");
    } else {
      setShowPopup(false);
      setButton(true);
      navigate("/login");
    }
  };

  const handleNameChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className='loginpagemaincontainer'>
      <div>
        <Navbar />
      </div>
      <div className="main">
        <div className="sign_up_form_main_container login_form_container">
          <div className="login_form">
            <h2>Sign up</h2>
            <div className="input_group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                className="input_text"
                name="name"
                value={credentials.name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input_group">
              <i className="fa-solid fa-square-envelope"></i>
              <input
                type="email"
                placeholder="Type Your E-mail Here"
                className="input_text"
                autoComplete="off"
                name="email"
                value={credentials.email}
                onChange={handleNameChange}
              />
            </div>
            <div className="input_group">
              <i className="fa-solid fa-location-dot"></i>
              <input
                type="text"
                placeholder="Type Your Address Here"
                className="input_text"
                autoComplete="off"
                name="geolocation"
                value={credentials.geolocation}
                onChange={handleNameChange}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                autoComplete="off"
                name="password"
                value={credentials.password}
                onChange={handleNameChange}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-address-book" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Mobile No."
                className="input_text"
                autoComplete="off"
                name="MobileNo"
                value={credentials.MobileNo}
                onChange={handleNameChange}
              />
            </div>
            {error && <div className=" SignUp_error">{error}</div>}
            {showPopup && (
              <div className="SingingUpLoading" style={{ marginTop: "50px" }}>
                <h2>Please Wait!</h2>
                <div className="SignUpLoader"></div>
              </div>
            )}
            <div className="button_group signupbutton" onClick={handleSubmit} id="login_button">
              <a>Submit</a>
            </div>
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

export default Signup;
