import React, { useEffect, useState, memo } from 'react';
import SingleOrder from './SingleOrder';
import Header from '../Component/Header';
import Css from '../Css/SingleOrder.css';
import {} from '../Css/myorderpage.css'

const MyOrder = ({orderId, newState }) => {
    const [orderData, setOrderData] = useState([]);
    

    useEffect(() => {
        const fetchMyOrder = async () => {
            // console.log("Received Order ID:", orderId);
            // console.log("Received New State:", newState);
            // ... (rest of the code)
            try {
                const response = await fetch("https://foodiii.onrender.com/myOrderData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: localStorage.getItem('userEmail')
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    let array = data.orderdata.order_data;
                    array = array.reverse();
                    setOrderData(array);
                } else {
                   
                    console.error("Request failed with status:", response.status);
                }
            } catch (error) {
               
                console.error("Error:", error);
            }
        };

        fetchMyOrder();
    }, [orderId, newState]);

   
    return (
        <div className='myorderpagemain'> 
            <div>
            <Header />
            </div>
            <div
                className="midpartoffoodpage myOrderDataPage"
                style={{
                    //  backgroundImage: `url(${background})`
                }}
            >
                <h3 className="yourorderheading">YOUR ORDER HISTORY..</h3>
                <div className="qwer">
                    {orderData &&
                        orderData.map((items, index) => (
                            <li key={index}>
                                <SingleOrder
                                    items={items}
                                    />
                            </li>
                        ))}
                </div>
            </div>
            <div>
                <p>Order ID: {orderId}</p>
                <p>New State: {newState}</p>
            </div>
        </div>
    );
};

export default MyOrder;
