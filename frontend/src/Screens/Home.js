import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import orderActions from '../store/order/orderActions';
import BottomHeader from '../Component/HeroSection';
import {} from '../Css/Header.css'
import HeroSection from '../Component/HeroSection';


const Home = () => {
    const chaman=useSelector(state=>state.order.orderStatus);
    const dispatch=useDispatch();
    

    return( <div  className='homemain'>
      
        <HeroSection/>
       


    </div>);
}


export default Home;