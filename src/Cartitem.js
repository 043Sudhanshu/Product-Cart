import React from 'react';

class Cartitem extends React.Component{
   
    render(){
       
        const {price,title,qty,image} =this.props.product;      //object destructuring..directy use the property of this.state
        const {product,increasequantity,decreasequantity,deleteitem}=this.props;
        return(
            <div className="cart-item">
                <div  className="left-block" style={{marginLeft:30}}>
                    <img src={image} style={styles.image} alt="" />
                </div>
                 <div className="right-block" style={{marginLeft:30}}>
                      <div style={{fontSize:25}}>{title}</div>
                      <div style={{color:'white'}} >Rs {price}</div>
                        <div style={{color:'white'}} >Quantity: {qty}</div>
                      <div className="cart-item-actions">
                                {/* Buttons -comment */}
                            <img 
                            onClick={()=>increasequantity(product)}   // this function shuld be called onclicking because it increasing the quantity of product
                            alt="increase" className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            />
                            <img onClick={()=>decreasequantity(product)} 
                            alt="decrease" className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                            />
                            <img 
                            onClick={()=>deleteitem(product.key)}
                            alt="delete" className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                            />
                     </div>
                 </div>
            </div>
        );
    }
}
const styles={
   image:{
       width:140,
       height:140,
       borderRadius:25,
       background:'#ccc',
       objectFit:"cover"
       
   }
}

export default Cartitem;