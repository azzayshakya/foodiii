import React, { useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Css from '../Css/Login.css'
import {} from '../Css/Loader.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [Button, setButton] = useState(true);
  const [credentials, setCredentials] = useState({ resturentId: "", MobileNo: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    setButton(false);
    setShowPopup(true);

    e.preventDefault();
    console.log(JSON.stringify({ resturentId: credentials.resturentId, MobileNo: credentials.MobileNo, password: credentials.password }));

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
      }

      if (json.success) {
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
    <div>
      <div className='loginpagemaincontainer'>
        <div>
          <Navbar />
        </div>

        <div className="main">    
          <div className="login_form_container">
            <div className="login_form">
              <h2 className='animate_animated animate_bounce animate_infineite'>Login</h2>
              <div className="input_group">
                <i class="fa-solid fa-square-envelope"></i>
                <input
                  type="text"
                  placeholder="Type Your Restaurant ID Here"
                  className="input_text"
                  autoComplete="off"
                  name="resturentId"
                  value={credentials.resturentId}
                  onChange={handleNameChange}
                />
              </div>
              <div className="input_group">
                <i class="fa-solid fa-square-envelope"></i>
                <input
                  type="text"
                  placeholder="Type Your Mobile Number Here"
                  className="input_text"
                  autoComplete="off"
                  name="MobileNo"
                  value={credentials.MobileNo}
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

              {showPopup && (
                <div className="SingingUpLoading" style={{ marginTop: "100px" }}>
                  <h2>Please Wait !</h2>
                  <div className="SignUpLoader"></div>
                </div>
              )}
              {Button && (
                <div className="button_group" onClick={handleSubmit} id="login_button">
                  <a>Submit</a>
                </div>
              )}
        
              <div className="fotter">
                <a><Link className="signuplink" to="/Signup">Signup</Link></a>
              </div>
            </div>
          </div>
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </div>
    </div>
  );
}

export default Login;
