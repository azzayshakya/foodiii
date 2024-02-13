import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import orderActions from '../store/order/orderActions';
import BottomHeader from '../Component/BottomHeader';
import {} from '../Css/Header.css'


const Home = () => {
    const chaman=useSelector(state=>state.order.orderStatus);
    const dispatch=useDispatch();
    

    return( <div  className='homemain'>
      
        <BottomHeader/>
       


    </div>);
}


export default Home;