import React, { useState} from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Css from '../Css/Login.css'
import {} from '../Css/Loader.css'
// import background from "../Images/collections-4.jpg";

import {Link,useNavigate } from 'react-router-dom'
import Header from '../Component/Header';
const Login = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [Button,setButton]=useState(true);

  const[credentials , setcredentials] =useState({email:"", password:""})

  let navigate=useNavigate();
  const handleSubmit=async(e) =>{

    setButton(false)
    setShowPopup(true)

    e.preventDefault();
    // console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    const response = await fetch("https://foodiii.onrender.com/api/loginuser",{
      
      method :"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json =await response.json();
    
    if(!json.success){
      alert("enter valid credentials")
      setShowPopup(false)
      setButton(true)
    }
    if(json.success){
      setShowPopup(false)
      setButton(true)
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      navigate("/");
    }

  }
  const handleNameChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})

  }


    return (<div>
      <div className='loginpagemaincontainer'>
      <div>
        <Header/>
      </div>

      <div className="main">    
        
      <div className="login_form_container">
      <div className="login_form">
        <h2 className='animate_animated animate_bounce animate_infineite'>Login</h2>
        <div className="input_group">
            <i class="fa-solid fa-square-envelope"></i>
            <input
              type="email"
              placeholder="Type Your E-mail Here"
              className="input_text"
              autocomplete="off"
              name="email"
              value={credentials.email}
              onChange={handleNameChange}

            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              className="input_text"
              autocomplete="off"
              name="password"
              value={credentials.password}
              onChange={handleNameChange}

            />
          </div>

          {showPopup &&
                    <div className="SingingUpLoading"  style={{marginTop:"100px"}}>
                    <h2>Please Wait !</h2>
                    <div className="SignUpLoader"></div>
                </div>
                }
                {Button &&
                    <div className="button_group" onClick={handleSubmit} id="login_button">
                    <a>Submit</a>
                  </div>
                }
        
        <div className="fotter">
          {/* <a>Forgot Password ?</a> */}
          <a><Link className="signuplink" to="/Signup">Signup</Link></a>
        </div>
      </div>
    </div>

    
    </div>

  
    {/* <script src="login.js"></script>  */}
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    

    {/* <div className="footer " style={{
      marginTop:"166px"
    }}>
    <Footer/>
    </div> */}
    </div>




    </div>);
}



export default Login;