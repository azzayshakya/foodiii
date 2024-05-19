import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';
import Header from '../Component/Header';
import Css from '../Css/SingleOrder.css';
import {} from '../Css/myorderpage.css';
import { useCart } from '../Component/ContextReducer';

const MyOrder = () => {
    const [orderData, setOrderData] = useState([]);
    const [ordersByDate, setOrdersByDate] = useState(new Map());
    const [loading, setLoading] = useState(true);
    const cartItems = useCart();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const fetchMyOrder = async () => {
            const authToken = localStorage.getItem('authToken');
            if (!authToken) {
                console.error('No auth token found');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                let response = await fetch("https://foodiii.onrender.com/api/YourOrder", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    body: JSON.stringify({
                        email: localStorage.getItem('userEmail')
                    })
                });
                
                const jsonResponse = await response.json();
                setOrderData(jsonResponse.myData);

                const newOrdersByDate = new Map();
                jsonResponse.myData.forEach((order) => {
                    const date = formatDate(order.date);
                    if (!newOrdersByDate.has(date)) {
                        newOrdersByDate.set(date, []);
                    }
                    newOrdersByDate.get(date).push(order);
                });
                setOrdersByDate(newOrdersByDate);

            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMyOrder();
    }, []);

    return (
        <div className='myOrdersPageMain'>
            <Header />
            {loading ? (
                <div className="DataLoading">
                    <h2>Data is loading !</h2>
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="MyOrdersPageBeforeHistory">
                    <h3 className="yourorderheading">YOUR ORDER HISTORY..</h3>
                    <div className='MyOrdersPageBeforeDate'>
                        {[...ordersByDate.keys()].map((date) => (
                            <div key={date} className='Beforedate'>
                                <div className="nine">
                                    <h1><span>{date}</span></h1>
                                </div>
                                <ul className='myorderpageajay MyOrderPageCards'>
                                    {ordersByDate.get(date).map((item, index) => (
                                        <div key={index}>
                                            <SingleOrder item={item} />
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyOrder;
