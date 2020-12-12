import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/cascading/cascading.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../components/redux/product.action';

function Productscreen(props) {
  const [qty, setqty] =useState(1);
 const productDetails = useSelector(state => state.productDetails);
 const{product,loading,error} = productDetails;
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id))
     return () => {
         //
     };
 }, [])

 const handleAddToCart = () =>{
   props.history.push("/cart/"+props.match.params.id + "?qty=" +qty)
 }

    return (
    <div>
                 <div className="back-to">
                   <Link to="/">Back to homepage</Link>
                 </div>
                 {loading? <div>loading....</div>:
                   error?<div>{error}</div> :
                   (
                    <div className="details">
       
       <div className="details-img">
               <img className="product-img" src={product.image} alt="img"/>
       </div> 
       <div className="details-info">
          <ul>
            <li>
              <h1> {product.title} </h1>
           </li>
            <li>
               <h3>Price : Rs {product.price}</h3>
           </li>
            <li>
              <h4>Description : {product.description}</h4>
            </li>
          </ul>
       </div>
       <div className="details-action">
           <ul>
           <li>
                  <h4> Qty : <select value={qty} onChange={(e) => {setqty(e.target.value)}}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  </select></h4>
               </li>
               <li>
                   <button onClick={handleAddToCart} className="button">Add to cart</button>
               </li>
           </ul>
       </div>
  </div>
                   )
                  }
               
         </div>
    );
}
export default Productscreen;