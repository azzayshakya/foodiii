import React, { memo, useState } from 'react';
import { useDispatchCart } from '../Component/ContextReducer';

const SingleRestOrder = ({ item }) => {

    const dispatch = useDispatchCart();

    const [selectedState, setSelectedState] = useState(""); // State to store selected option value
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); // Update selected file when file input changes
    }
    

   
    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState); // Update selected state when dropdown value changes
        console.log(item._id, selectedState);
    }

    //   const [selectedState, setSelectedState] = useState(""); // State to store selected option value

    const handleStateSubmit = async () => {
        try {
            const response = await fetch("https://foodiii.onrender.com/api/UpdateState", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email: localStorage.getItem('userEmail'),
                    id: item._id,
                    Selected_State : selectedState,
                    Video:selectedFile
                    
                })
            });
            const data = await response.json();
            // Handle response as needed
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }



    return(
        
        <li className='Restaurentmainonecard' >           
     
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
            Tell me the state of the order ?
            </label>
            <select name="" id="" onChange={handleStateChange}>
                        <option value="State" disabled hidden>State</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Delivered">Delivered</option>
            </select>
            <input type="file" accept="video/*" onChange={handleFileChange} /> {/* File input for selecting video */}
            <button onClick={handleStateSubmit}>Submit</button>
        </div>
       
 

        </div>
        </li>
    );
}
export default memo(SingleRestOrder);
