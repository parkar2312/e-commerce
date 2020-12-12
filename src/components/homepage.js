import React from 'react';
//import './cascading.css';
//import logo1 from './images/download.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../components/redux/product.action';


function Homepage(props){

 const productList = useSelector(state => state.productList);
 const {products, loading, error} = productList;
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(listProducts())
    
     return () => {
         //
     };
 }, [])

    return(
        loading?<div>loading....</div>:
        error? <div>{error};</div>:

        <div className="g-container">
            <div className="content">

             <ul className="products">
                {
                    products.map(product => 
                         <div className="product">
                        <img className="product-image" src={product.image} />
                        <div className="product-name">
                            <Link to={'/products/'+ product.id}>{product.title}</Link></div>
                        <div className="product-price">Rs {product.price}</div>
                        </div>
                    )
                }
             </ul>
        </div>
        </div>
    );}

export default Homepage;