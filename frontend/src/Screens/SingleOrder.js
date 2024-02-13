import React from 'react'



const SingleOrder = ({  items, selectedOrderState }) => {

    const date = items[0].Order_date
  
    return (<div>
        <div className='singleMainDate'>
            <ul className='maincontain'>
                <div class="nine">
                    <h1><span>{date}</span></h1>
                </div>
                {
                    items
                        .slice(1)
                        .map((item, index) => {
                            
                            return <li className='mainonecard' key={index}>
                                <div className='innerpart'>                           
                                    <p style={{textAlign:"center"}}> <img style={{width: '300px', height: '200px', borderRadius: '52px' }} src={item.img} alt="hey it's your image" /></p>
                                    <p>  Name:{item.name}</p>
                                    <p>  Price:{item.price}</p>
                                    <p>  Qty:{item.qty}</p>
                                    <p>  Size:{item.size}</p>
                                    <div className='Your-Order-State'>

                                    {selectedOrderState && (
                                            <div>
                                                {/* <p>Selected Order ID: {selectedOrderState.orderId}</p>
                                                <p>New State: {selectedOrderState.newState}</p> */}
                                            </div>
                                        )}
                                        

                                    </div>
                                </div>
                            </li>
                        })
                }
            </ul>
        </div>
    </div>)
}


export default SingleOrder;


