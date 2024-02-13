import React, { useEffect, useState, memo } from 'react';
import SingleRestOrder from './SingleRestOrder';
import Header from '../Component/Header'; 
import MyOrder from './MyOrder';




const RestOrder = () => {
  const [data, setData] = useState([]);
  const [ordersByDate, setOrdersByDate]   = useState(new Map());
  const [selectedState, setSelectedState] = useState(""); // Add state for selectedState
  const [selectedOrder, setSelectedOrder] = useState({ orderId: null, newState: "" });


  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
  };
  
  const handleOrderStateChange = (orderId, newState) => {
    // console.log(`Order ${orderId} state changed to ${newState}`);
    setSelectedState(newState);
    setSelectedOrder({ orderId, newState });
};


  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:5000/api/getOrderOfMyresturant", {
        method: "GET"
      });

      response = await response.json();
      setData(response.data);
      const newOrdersByDate = new Map();
      response.data.forEach((order) => {
        const date = formatDate(order.date); 
        if (!newOrdersByDate.has(date)) {
          newOrdersByDate.set(date, []);
        }
        newOrdersByDate.get(date).push(order);
      });
      setOrdersByDate(newOrdersByDate);
    };

    fetchData();
  }, [data]);

  return (
    <div className='resturentorderpagemain'>
      <Header />
      <div>
        <div className='yourrestorderheading' style={{color:"white"}}>Your restaurant orders :</div>
        <div className='resturentpagemain'>
         
          {[...ordersByDate.keys()].map((date) => (
            <div key={date}>

              <div class="nine">
                <h1><span>{date}</span></h1>
              </div>

              <ul style={{display:"flex"}}>
                
              {ordersByDate.get(date).map((item, index) => (
                <div key={index}>
                  <SingleRestOrder item={item} onStateChange={(newState) => handleOrderStateChange(item.order.id, newState)}/>


                  {/* Pass orderId and newState to MyOrder component */}
                  {selectedOrder.orderId === item.order.id && (
                    <MyOrder orderId={selectedOrder.orderId} newState={selectedState} />
                    

                    )}
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

export default memo(RestOrder);
