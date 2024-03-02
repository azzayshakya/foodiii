import React, { useEffect, useState, memo } from 'react';
import SingleOrder from './SingleOrder';
import Header from '../Component/Header';
import Css from '../Css/SingleOrder.css';
import {} from '../Css/myorderpage.css'

const MyOrder = ({ orderId, newState, handleStateChange}) => {
    const [orderData, setOrderData] = useState([]);
    const [ordersByDate, setOrdersByDate] = useState(new Map());

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };
        
    useEffect(() => {
        const fetchMyOrder = async () => {
            try {
                let response = await fetch("https://foodiii.onrender.com/api/YourOrder", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: localStorage.getItem('userEmail')
                    })
                });

                response = await response.json();
                setOrderData(response.myData);
                 
                
                const newOrdersByDate = new Map();
                response.myData.forEach((order) => {
                    const date = formatDate(order.date); 
                    if (!newOrdersByDate.has(date)) {
                        newOrdersByDate.set(date, []);
                    }
                    newOrdersByDate.get(date).push(order);
                });
                setOrdersByDate(newOrdersByDate);
               
                
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchMyOrder();
    }, []); 

   
    return (
        <div className='myOrdersPageMain'> 
            <div>
            <Header />
            </div>
            <div className="MyOrdersPageBeforeHistory">
                <h3 className="yourorderheading">YOUR ORDER HISTORY..</h3>

                <div className=' MyOrdersPageBeforeDate'>
         
          {[...ordersByDate.keys()].map((date) => (

            <div key={date} className='Beforedate'>
              <div class="nine">
                <h1><span>{date}</span></h1>
              </div>

              <ul className='myorderpageajay MyOrderPageCards' style={{display:""}}>
                
              {ordersByDate.get(date).map((item, index) => (

                <div key={index}>
                  <SingleOrder item={item} handleStateChange={handleStateChange} />            
                </div>
              ))}
            </ul>
            </div>
          ))}
        </div>
                
            </div>
           
        </div>
    );
};

export default MyOrder;
