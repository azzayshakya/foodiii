import React from 'react'
import {} from '../Css/BottomHeader.css'
import { Link } from 'react-router-dom'
import {Foodcards} from '../Screens/Foodcards'
// import Header from './Header'
import Header from '../Component/Header';
import { TbHandClick } from "react-icons/tb";

const BottomHeader =()=>{
    return <>
    <div>
        <div  className='BottomHeader'>
            
            
    {/* <h1>BottomHeader</h1> */}
    <div className="BottomHeaderimg">
    <div>
                <Header/>
            </div>
    <div className="mid">
                <h1>Foodiii</h1>
                <h3 className='headertag'>Anything, anytime, anywhere. We deliver it all.</h3>
                <div className="midbutton">
                <Link to="/foodCards">
                    <button>Check Out Menu <span><TbHandClick/></span></button>       
                </Link>
                </div>
                
            </div>
        
    </div>


        </div>
    </div>
    </>

}
export  default BottomHeader;