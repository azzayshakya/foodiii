import React from 'react'
import Css from '../Css/SingleOrder.css';
import {} from '../Css/myorderpage.css'





const SingleOrder = ({  item, foodState , handleStateChange }) => {
 console.log(handleStateChange)
  
    return (<div>
        <li className='myOrderPageMainOneCard' >   
        <div className=' '>

         <img  src={item.order.img} alt="hey it's your image" />
         {/* <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>ID </div>:<div className='orderpagemaincontainer_rightside'>{item._id}</div></div> */}

         
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.order.name}</div></div>
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.order.qty}</div></div>      
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.order.size}</div></div>
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.order.price}</div></div> 

         <div className="foodState">
         {foodState}

         </div>
     </div>
     </li>
    </div>)
}


export default SingleOrder;


