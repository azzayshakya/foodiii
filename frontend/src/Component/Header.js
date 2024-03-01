import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap-v5';
import Cart from '../Screens/Cart';
import Modal from '../Modal';
import { useCart } from './ContextReducer';
import {} from '../Css/Header.css'
import { GraphicEq } from '@mui/icons-material';
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";

const Header = () => {

    const [IsTogle,setIsTogle]=useState(false);

    const [cartView,setCartView] = useState(false);
    let data = useCart();
    const navigate = useNavigate();

    const togglebutton=()=>{
        setIsTogle(!IsTogle);
    }

    const handleLogout = () => {
    
        localStorage.removeItem("authToken")
        localStorage.removeItem("authToken2")
        navigate("/login")   
    };
    return <div>

        <div className="head" >

            <header className='headernav'>
                <h4 className="icon" >
                  
                </h4>
                <div className='mainnavbar'>
                    <ol>
                        <li><Link className='link myOrder' to="/">Home</Link></li>
                        {(!localStorage.getItem("authToken2")) ?
                    
                            <li><Link className='link myOrder' to="/RagisterResturent">Your_Resturent</Link></li>
                            : " "}


                        {(localStorage.getItem("authToken2")) ?
                            <li><Link className='link myOrder' to="/RestOrder">Restaurant_Orders</Link></li>
                           

                            : " "}

                                     
                        {(localStorage.getItem("authToken")) ?
                        
                            <li><Link className='link myOrder' to="/myOrder">My Orders</Link></li>
                            
                            : " "}
                        {(!localStorage.getItem("authToken")) ?



                            <div className='abc'>
                                <li><Link className='link' to="/login">Login</Link></li>
                                <li><Link className='link' to="/Signup">Sign up</Link></li>
                            </div>

                            : <div className='cde'>
                                <div onClick={handleLogout}>
                                <li> <Link to="" className='link myOrder'>Log Out</Link></li>
                            </div>

                                <div className=" cartbutton efg asdf "  onClick={()=>{setCartView(true)}}>
                                    <li>Cart <Link to=""></Link></li>  
                                    <div className="badge">
                                    <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                        </div>                          
                                </div>
                                <div className='modelcart'>
                                {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                                </div>

                            </div>
                        }
                    </ol>
                </div>

         

                

                { IsTogle &&(
                    <div>
                        <header  className='togglenavbar'>
                            <ol>
                                <li><Link className='link myOrder' to="/">Home</Link></li>

                                    {(!localStorage.getItem("authToken2")) ?
                                    <li><Link className='link myOrder' to="/RagisterResturent">Your_Resturent</Link></li>
                                    : " "}  

                                    {(localStorage.getItem("authToken")) ?
                                    <li><Link className='link myOrder' to="/myOrder">My Orders</Link></li>
                                    : " "}
                                    
                                    {(!localStorage.getItem("authToken")) ?
                                    <div className='abc'>
                                        <li><Link className='link' to="/login">Login</Link></li>
                                        <li><Link className='link' to="/Signup">Sign up</Link></li>
                                    </div>

                                    : <div className='cde'>
                                        <div onClick={handleLogout}>
                                        <li> <Link to="" className='link myOrder'>Log Out</Link></li>
                                    </div>

                                    <div className=" cartbutton efg asdf "  onClick={()=>{setCartView(true)}}>

                                        <li>Cart <Link to=""></Link></li>  
                                        <div className="badge">
                                            <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                        </div>                  
                                    </div>

                                    <div className='modelcart'>
                                        {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                                    </div>

                                    </div>
                                    }
                            </ol>
                        </header>
                    </div>
                )
                   
                }

                <div className='toglebutton' onClick={togglebutton}>
                    <button>
                        {IsTogle ? <ImCross/>:<FaBars />}
                    </button>
                </div>
            </header>
            
        </div>
    </div>;
}



export default Header;