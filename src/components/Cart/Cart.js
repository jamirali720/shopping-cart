import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartInfo, clearTheCart, decrement, getTotalAmount, increment, removeItem } from '../redux/cartSlice';
const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items)
    const {totalAmount, totalQuantity, items}= useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotalAmount())
    }, [dispatch, items])


    const vat = totalAmount * 0.10;
    const shippingCharges = 50;
    const finalTotalAmount = totalAmount + vat + shippingCharges;


    useEffect(() => {
        dispatch(cartInfo(finalTotalAmount))
    }, [dispatch, finalTotalAmount])
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 rounded-3">
                    <table className="table table-hover table-border bg-info">
                        <thead>
                            <tr className="bg-success">
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>category</th>
                                <th>Price</th>                    
                                <th>Action</th>                    
                            </tr>
                        </thead>
                        <tbody className="text-dark">
                            {
                                cart?.map((item, index) => (
                                    <tr key={index}>
                                        <td> <img style={{width:120, height: 100}} src={item.image} alt="" /> </td>
                                        <td>  
                                            <div>
                                                <p> {item.title} </p>
                                                <p><button className="btn btn-outline-danger" onClick={() => dispatch(removeItem(item.id))}> remove</button></p>
                                            </div>
                                        </td>
                                        <td> {item.category} </td>
                                        <td> {item.price} </td>   
                                        <td> <div>
                                        <button className="btn btn-outline-primary" onClick={() => dispatch(increment(item.id))}> + </button>
                                        <p> {item.quantity} </p>
                                        <button className="btn btn-outline-primary" onClick={() => dispatch(decrement(item.id))}> - </button>
                                            </div></td>                                    
                                    </tr>
                                    
                                )) 
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 mb-3 bg-info rounded-3">                  
                    <div className="my-5">
                            <div className='my-4'> 
                                <h5 className='my-4'> Total Items : {totalQuantity} </h5>
                                <h5> Sub-Total : ${totalAmount}</h5>
                            </div>
                            <div className="vat my-4">
                                        <h5> Vat Charge : ${vat.toFixed(2)} </h5>
                            </div>
                            <div className="vat my-4">
                                        <h5>Shipping Charge  : ${shippingCharges} </h5>
                            </div>
                                <div className="total my-4">
                                        <h5 className="text-secondary"> Total Amount : $ {finalTotalAmount.toFixed(2)} </h5>
                                    </div>
                            <button className="btn btn-outline-primary my-5 me-1" onClick={()=> dispatch(clearTheCart())} > Clear Cart </button>
                            <Link  to="/" className="btn btn-outline-primary my-5"> Shopping More </Link>

                            <div> <Link to="/payment">  <button className="btn btn-outline-primary my-5 me-1">Payment  Process</button> </Link></div>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default Cart;