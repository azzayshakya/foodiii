import React from 'react';
import Css from '../Css/Navbar.css'
import { Link } from 'react-router-dom'
import background from "../Images/collection-3.jpg";



const Navbar = () => {
    return <div >
        <div className="mainNvbar">
        <header className="headermain" >

            <h4 className="icon">
                Get the app
            </h4>
            <ol>
                {/* <li><Link className='link' to="/">Home</Link></li> */}
                {/* <li>Add resturant <Link to=""></Link></li> */}
                <li><Link className='link myOrder' to="/login">Login</Link></li>
                <li><Link className='link myOrder' to="/Signup">Sign up</Link></li>
                <li><Link className='link ' to="/RagisterResturent">Your_Resturent</Link></li>


            </ol>
        </header>
        </div>


    </div>;
}
export default Navbar;