
import '../Css/Header.css';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap-v5';
import Modal from '../Modal';
import Cart from '../Screens/Cart';
import { useCart } from './ContextReducer';
import '../Css/Header.css';
import { ImCross } from "react-icons/im";
import { FaBars, FaHome, FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    const [IsTogle, setIsTogle] = useState(false);
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    const data = useCart();

    const togglebutton = () => setIsTogle(!IsTogle);
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authToken2");
        navigate("/login");
    };

    return (
        <>
            <div className="head">
                <header className="headernav">
                    <h2 className="icon">MODERN</h2>

                    <ol className="nav-links">
                        <li><Link className="link myOrder" to="/">Home</Link></li>

                        {(!localStorage.getItem("authToken2")) ?
                            <li><Link className="link myOrder" to="/RagisterResturent">Your Restaurant</Link></li> :
                            <li><Link className="link myOrder" to="/RestOrder">Restaurant Orders</Link></li>
                        }

                        {(!localStorage.getItem("authToken")) ? (
                            <>
                                <li><Link className="link" to="/login">Login</Link></li>
                                <li><Link className="link" to="/Signup">Sign up</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link className="link myOrder" to="/myOrder">My Orders</Link></li>
                                <li onClick={handleLogout}><span className="link myOrder">Log Out</span></li>
                                {data.length > 0 && (
                                    <li className="n_cart_here" onClick={() => setCartView(true)}>
                                        <span><FaCartArrowDown /></span>
                                        <div className="cartbutton">Cart
                                            <div className="badge">
                                                <Badge pill bg="cartBadge">{data.length}</Badge>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </>
                        )}
                    </ol>

                    <div className="toglebutton" onClick={togglebutton}>
                        <button>
                            {IsTogle ? <ImCross /> : <FaBars />}
                        </button>
                    </div>
                </header>
            </div>

            {IsTogle && (
                <header className='togglenavbar'>
                    <ol>
                        <li><Link className='link myOrder' to="/"><FaHome /> Home</Link></li>
                        {(!localStorage.getItem("authToken2")) ?
                            <li><Link className='link myOrder' to="/RagisterResturent">Your Restaurant</Link></li> :
                            <li><Link className='link myOrder' to="/RestOrder">Restaurant Orders</Link></li>
                        }

                        {(!localStorage.getItem("authToken")) ? (
                            <>
                                <li><Link className="link" to="/login">Login</Link></li>
                                <li><Link className="link" to="/Signup">Sign up</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link className="link myOrder" to="/myOrder">My Orders</Link></li>
                                <li onClick={handleLogout}><span className="link myOrder">Log Out</span></li>
                                <li onClick={() => setCartView(true)} className="cartbutton">
                                    Cart <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                </li>
                            </>
                        )}
                    </ol>
                </header>
            )}

            {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
        </>
    );
};

export default Navbar;
