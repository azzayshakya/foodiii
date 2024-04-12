import React, { memo, useState,useEffect } from 'react';
import { useDispatchCart } from '../Component/ContextReducer';

const SingleOrder = ({ item , selectedState  }) => {
    const dispatch = useDispatchCart();
    console.log("Selected State in SingleOrder:", selectedState);



   
    useEffect(() => {

        

    },[])


    return (
        <div>
            <li className='myOrderPageMainOneCard'>
                <div className=' '>
                    <img src={item.order.img} alt="hey it's your image" />
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>Id </div>:
                        <div className='orderpagemaincontainer_rightside'>{item._id}</div>
                    </div>
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>Qty </div>:
                        <div className='orderpagemaincontainer_rightside'>{item.order.qty}</div>
                    </div>
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>Size </div>:
                        <div className='orderpagemaincontainer_rightside'>{item.order.size}</div>
                    </div>
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>Price </div>:
                        <div className='orderpagemaincontainer_rightside'>{item.order.price}</div>
                    </div>
                    
                    <div className="state-control">
                        {
                            selectedState
                        }
                      
                    </div>
                </div>
            </li>
        </div>
    );
};

export default SingleOrder;
