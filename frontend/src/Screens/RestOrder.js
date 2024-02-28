import React, { useEffect, useState, memo } from 'react';
import SingleRestOrder from './SingleRestOrder';
import Header from '../Component/Header'; 
import SingleOrder from '../Screens/SingleOrder'




const RestOrder = () => {
  const [data, setData] = useState([]);
  const [ordersByDate, setOrdersByDate]   = useState(new Map());



  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
  };
  
    // Add a state to store the states of all items
    const [selectedStates, setSelectedStates] = useState({});
    const [orderStates, setOrderStates] = useState({});

    // Function to handle state changes
    const handleStateChange = (id, newState) => {
      setSelectedStates(prevStates => ({
        ...prevStates,
        [id]: newState
      }));
      console.log(newState ,id)
    };



  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:7000/api/getOrderOfMyresturant", {
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
      // console.log(newOrdersByDate)
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
                  <SingleRestOrder item={item} onStateChange={handleStateChange} />

            
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
