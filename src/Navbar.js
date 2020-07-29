import React from 'react';
import './index.css';


 const Navbar= (props) => {
        return(
        
         <div className="Nav">
          
             <div>
                <h3 > &nbsp;Shopping Cart  </h3>
            </div> 
            
            <div style={{marginTop:25}}>
             <img style={{width:50,margin:10}} src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="kart"  />
             <div className="number">
              {props.count}
             </div>
             
             </div>
            
        
        </div>      
        
        );

}
export default Navbar;