const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

app.post('/payment', cors(),  async(req, res) => {
    const {token ,amount} = req.body;
    
    try {
        const payment = await stripe.charges.create({
            amount, 
            currency: 'USD', 
            description: 'shopping mall',          
            source: token.id,

        })
        console.log(payment)
        res.json({
            message:'Payment successful', 
            success: true
        })
    } catch (error) {
        
        res.json({
            message: 'Payment Unsuccessful Or something error', 
            success: false
        })
    }
})

app.get('/', (req, res) => {
    res.send('server site is ok ')
})


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)    
})