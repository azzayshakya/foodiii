import React, { memo, useState } from 'react';

const SingleRestOrder = ({ item, onStateChange }) => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    onStateChange(item._id, newState); 
    // Pass the ID and the new state to the parent
    
  };
    return(
        
        <li className='mainonecard' >           
     
        <div className='innerpart'>

            <p><img style={{ width: '280px', height: '200px', borderRadius: '52px' }} src={item.order.img} alt="hey it's your image" /></p>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>OrderID </div>:<div className='orderpagemaincontainer_rightside'>{item._id}</div></div>
            
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.order.name}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.order.qty}</div></div>      
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.order.size}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.order.price}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>MobileNo </div>:<div className='orderpagemaincontainer_rightside'>{item.MobileNo}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Email </div>:<div className='orderpagemaincontainer_rightside'>{item.email}</div></div>
            



            
        <div class="state-control">
            <label for="name">
                which option best describe you ?
            </label>
            <select name="" id="" value={selectedState} onChange={handleStateChange}>
                        <option value="State" disabled hidden>State</option>
                        <option value="Pending">Pending</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cancel">Cancel</option>
            </select>
        </div>
 

        </div>
        </li>
    );
}
export default memo(SingleRestOrder);
