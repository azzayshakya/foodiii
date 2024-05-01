import React, { useEffect, useState, memo } from 'react';
import SingleRestOrder from './SingleRestOrder';
import Header from '../Component/Header'; 
import SingleOrder from '../Screens/SingleOrder'
import { ContactsOutlined } from '@mui/icons-material';
import { useDispatchCart } from '../Component/ContextReducer';




const RestOrder = () => {





  const [data, setData] = useState([]);
  const [ordersByDate, setOrdersByDate]   = useState(new Map());
  const [loading, setLoading] = useState(true);



  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
  };
 


    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          let response = await fetch("https://foodiii.onrender.com/api/getOrderOfMyresturant", {
            method: "GET"
          });
    
          setLoading(false);
    
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
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData(); 
    
    }, [])
    
  return (
    <div className='resturentorderpagemain'>
      <Header />
      <div>

        
        <div className='yourrestorderheading' style={{color:"white"}}>Your Restaurent Orders :</div>
        {loading ? (
                <div className="DataLoading">
                    <h2>Data is loading !</h2>
                    <div className="loader"></div>
                </div>
            ) : (
        <div className='resturentpagemain'>
          
         
          {[...ordersByDate.keys()].map((date) => (
            <div key={date}>

              <div class="nine">
                <h1><span>{date}</span></h1>
              </div>

              <ul style={{display:"flex"}}>
                
              {ordersByDate.get(date).map((item, index) => (

                <div key={index}>
                  <SingleRestOrder item={item} />

            
                </div>
              ))}
            </ul>
            </div>
          ))}
        </div>
            )}
      </div>
    </div>
  );
};

export default memo(RestOrder);
