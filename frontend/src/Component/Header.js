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
import { FaHome } from "react-icons/fa";

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
    return (<>

        <div className="head" >

            <header className='headernav'>
                <h4 className="icon" >
                  
                </h4>
                <div className='mainnavbar'>
                    <ol>
                        <li><Link className='link myOrder' to="/">Home</Link></li>
                        
                        {(!localStorage.getItem("authToken2")) ?                   
                            <li><Link className='link myOrder' to="/RagisterResturent">Your_Resturent</Link></li>                   
                            :<li><Link className='link myOrder' to="/RestOrder">Restaurant_Orders</Link></li>}
                        {(!localStorage.getItem("authToken")) ?
                            <div className='abc'>
                                <li><Link className='link' to="/login">Login</Link></li>
                                <li><Link className='link' to="/Signup">Sign up</Link></li>
                            </div>

                            : <div className='cde'>
                                <div >
                                <li><Link className='link myOrder' to="/myOrder">My Orders</Link></li>
                                <li onClick={handleLogout} > <Link to="" className='link myOrder'>Log Out</Link></li>
                                <li  onClick={()=>{setCartView(true)}}  className='cartbutton'>Cart  
                                    <div className="badge">
                                    <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                    </div>     
                                </li>                      
                                <div className='modelcart'>
                                    {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                                </div>
                                </div>
                            </div>
                        }
                    </ol>
                    <div className='toglebutton' onClick={togglebutton}>
                    <button>
                        {IsTogle ? <ImCross/>:<FaBars />}
                    </button>
                </div>
                   
                </div>
                </header>
            </div>
         

                

                { IsTogle &&(
                    <div>
                        <header  className='togglenavbar'>
                        <ol>
                        <li> <Link className='link myOrder' to="/"><div className='Headericons'><FaHome/></div>Home</Link></li>
                        
                        {(!localStorage.getItem("authToken2")) ?                   
                            <li><Link className='link myOrder' to="/RagisterResturent">Your_Restaurent</Link></li>                   
                            :<li><Link className='link myOrder' to="/RestOrder">Restaurant_Orders</Link></li>}
                        {(!localStorage.getItem("authToken")) ?
                            <div className='abc'>
                                <li><Link className='link' to="/login">Login</Link></li>
                                <li><Link className='link' to="/Signup">Sign up</Link></li>
                            </div>

                            : <div className='cde'>
                                <div >
                                <li><Link className='link myOrder' to="/myOrder">My Orders</Link></li>
                                <li onClick={handleLogout} > <Link to="" className='link myOrder'>Log Out</Link></li>
                                <li  onClick={()=>{setCartView(true)}}  className='cartbutton'>Cart  
                                    <div className="badge">
                                    <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                    </div>     
                                </li>                      
                                <div className='modelcart'>
                                    {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                                </div>
                                </div>
                            </div>
                        }
                    </ol>
                        </header>
                    </div>
                )
                   
                }

               
            
    </>);
}



export default Header;