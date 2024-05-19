import React, { memo, useState,useEffect } from 'react';
import { useDispatchCart } from '../Component/ContextReducer';

const SingleOrder = ({ item   }) => {
    // console.log(item)   
    useEffect(() => {

        

    },[])


    return (
        <div>
            <li className='myOrderPageMainOneCard'>
                <div className=' '>
                    <img src={item.order.img} alt="hey it's your image" />
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>Name </div>:
                        <div className='orderpagemaincontainer_rightside'>{item.order.name}</div>
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
                    
                    <div className='orderpagemaincontainer'>
                        <div className='orderpagemaincontainer_leftside'>State </div>:
                        <div className='orderpagemaincontainer_rightside'>{item.Order_State}</div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default SingleOrder;
