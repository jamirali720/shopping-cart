import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../redux/cartSlice'
import Skeletons from '../Skeleton/Skeletons';
import Rating from 'react-rating';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filterProduct, setFilterProduct] = useState([]);
    const dispatch = useDispatch();
    const searching = useSelector((state) => state.cart.searchText)

    useEffect(() => {
        const fetchProducts = async () => {
             setLoading(true)
         const url =  'https://fakestoreapi.com/products';
         const response = await axios.get(url);            
         setProducts(response.data);   
         setFilterProduct(response.date)
         setLoading(false)         
        }
        fetchProducts();
         
    }, [])

    useEffect(() => {
        const filterData = () => {
            const matchedPd = products.filter(pd => pd.category.toLowerCase().includes(searching.toLowerCase()))
            setFilterProduct(matchedPd)
           
        }
            
        filterData()
    }, [products, searching])


    
    const renderProducts = products?.map(product => {            
        return(    
            <>                     
             <div className="card m-2 p-2 shadow-3" style={{width:'18rem', height:'450px'}} key={product.id}>                    
                        <div className="card-header">
                                <img style={{width:'100%', height: '200px'}} className="card-img-top" src= {product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {product.title}
                                </h6>
                                <div className="d-flex">
                                <p className="card-text text-primary">
                                    Category : {product.category}
                                </p>
                                <div className="card-text ms-2 text-warning"> Price : {product.price}</div>
                                </div>
                                <div> <Rating   
                                    className='text-warning'                              
                                    emptySymbol="far fa-star"
                                   fullSymbol="fas fa-star"
                                   initialRating={product.rating.rate}
                                
                                /></div>
                            </div>
                            <div className="card-footer">
                                <button  className="btn btn-outline-primary me-2"> Show Details</button>
                                <button onClick={() => dispatch(addToCart(product))} className="btn btn-outline-primary"> Add To Cart</button>
                        </div>                 
                </div> 
            </>   
        )
    })
    return (
        <div className="d-flex justify-content-center flex-wrap ">               
           {  !loading ?  renderProducts : <Skeletons cards={8}/> }
           
        </div>
    );
};

export default Home;


