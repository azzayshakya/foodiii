import React from 'react'
import Css from '../Css/SingleOrder.css';
import {} from '../Css/myorderpage.css'





const SingleOrder = ({  item, foodState , handleStateChange }) => {
 console.log(handleStateChange)
  
    return (<div>
        <li className='mainonecard' >   
        <div className='innerpart'>

         <p><img style={{ width: '280px', height: '200px', borderRadius: '52px' }} src={item.order.img} alt="hey it's your image" /></p>
         {/* <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>ID </div>:<div className='orderpagemaincontainer_rightside'>{item._id}</div></div> */}

         
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.order.name}</div></div>
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.order.qty}</div></div>      
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.order.size}</div></div>
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.order.price}</div></div> 
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>MobileNo </div>:<div className='orderpagemaincontainer_rightside'>{item.MobileNo}</div></div> 
         <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Email </div>:<div className='orderpagemaincontainer_rightside'>{item.email}</div></div>

         <div className="foodState">
         {foodState}

         </div>
     </div>
     </li>
    </div>)
}


export default SingleOrder;


