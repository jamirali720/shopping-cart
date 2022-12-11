import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useSelector} from 'react-redux'
import axios from 'axios' 
const PUBLISHABLE_KEY='pk_test_51IgjDBKERk0OkRSOjX9m2uZxWztyl3LyRoEZKThphzPEVaizUvi2nm5ahJlMCa3npQbY1uyqumiDnb0HncjLI7Lt00wt7gX6Ux'

const Payment = () => {
    const amount = useSelector((state) => state.cart.cartTotalAmount)
    const parseAmount = amount.toFixed(2)
  
    const stripePrice = parseAmount * 100;
    const payNow = async(token) => {
       try {
            const  response = await axios( { 
                url: 'http://localhost:5000/payment',
                method: "POST", 
                // headers:{
                //     'Authorizations': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                // }, 
                data:{
                    amount: stripePrice, 
                    token
                }
        
            })
           
            if(response.status === 200){
                alert('payment was successful')
            }
        
       } catch (error) {
        console.log(error)
       }
    }
   

    return (
        <StripeCheckout
        label='Pay Now'
        stripeKey={PUBLISHABLE_KEY}
        billingAddress
        shippingAddress           
        allowRememberMe 
        name='jamir ali'
        description='this is description'
        amount={stripePrice}
        email= 'jamirali@gmail.com'
        currency="USD"
        token={payNow}  
        />
    );
};

export default Payment;