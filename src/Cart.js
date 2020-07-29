import React from 'react';
import Cartitem from './Cartitem';


const Cart=(props)=>{

  
    const {products}=props;
    return (
       
        <div className="Cart"> 
         {
          products.map( (product) =>{
            return <Cartitem 
            product={product} 
            increasequantity={props.increaseq}
            decreasequantity={props.decreaseq}
            deleteitem={props.deleteitem}
            key={product.key}
            /> 
        })
        }  
        </div>
    );

  }


export default Cart;