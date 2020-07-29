import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
                    {
                        price : 25000,
                        qty:4,
                        title:'PS4',
                        key:1,
                       image:"https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80"
                      },

                {
                    price : 55000,
                    qty:1,
                    title:'Watch',
                    key:2,
                    image:"https://images.unsplash.com/photo-1565250026886-ec2964652258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                },

                    {
                        price : 60000,
                        qty:1,
                        title:'Snooker table',
                        key:3,
                        image:"https://images.unsplash.com/photo-1547216156-eeacd848d141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    }
        ]
    }
}
 
increaseq=(product)=>{
 const {products}=this.state;
 const index=products.indexOf(product);
 
 products[index].qty+=1;
 this.setState({
     products:products         // the right product is the product which we have taken above by destructuring..we are updating it
 });

} 
decreaseq=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if( products[index].qty>1){
    products[index].qty-=1;
    }
    this.setState({
        products:products         // the right product is the product which we have taken above by destructuring..we are updating it
    });

   }

   deleteq=(id)=>{
  const {products}=this.state;
  const idremovedarray= products.filter((item)=>{return (item.key!==id)});
  this.setState({
      products:idremovedarray
  })
   }

   getproductcount=()=>{
     const {products}=this.state;
     let count=0;
     products.forEach((product)=>{
      count+=product.qty;
     });
     return count;
   }
   gettotalprice=()=>{
     const {products}=this.state;
     let totalprice=0;
     products.forEach((product)=>{
      totalprice += product.qty*product.price;
     })
     return totalprice;
   }

  render(){
    const {products}=this.state;
    
        return (
            
              <div className="App">
                
                  <Navbar
                  count={this.getproductcount()}
                  />
                  <Cart 
                  products={products}
                  increaseq={this.increaseq}
                  decreaseq={this.decreaseq}
                  deleteitem={this.deleteq}
                 />
                   <div style={{background:"red"}}>
                  <h1> &nbsp; Total Cost : {this.gettotalprice()}</h1>
                   </div>
              </div>
        );
    }
}

export default App;
