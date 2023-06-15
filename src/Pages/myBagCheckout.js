import React, { useContext, useState } from 'react'
import Layout from '../component/Layout/layout'
import Header from '../component/header/Header'
import NavBar from '../component/header/Navbar'
import Footer from '../component/footer/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import './myBagCheckout.css'
import DataContext from '../DataContext'

const MyBagCheckout = () => {
  const{data} = useContext(DataContext)
 

  //we make state below this line--inside [] cardItem is array -do  hold value that we add to the card 
  //setCardItem is method function to put the value inside card item array like .push
 //const student = {
// name: "sarah",
// age: 3,
// sex:"girl"
//   }
  //below destructuring 
  // const {name,age,sex}=student


  // use state is destructuring like line above in javaScript-
  //use state destruc 2 value 1. name of use state 2. what we use to change first value
// behind set have to be the same name as the front
//cordsItems hold value and setCardItems is change value

  const [cardItems, setCardItems] = useState([])
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState([])

  //useEffect below
useEffect(()=>{
  let startTotalPrice = 0;
  cardItems.forEach((item)=>{
startTotalPrice += item.price * item.quantity
//quantity is in card.js line 56
  });
  setTotalPrice(startTotalPrice);



},[cardItems])

const addItemToCart =(product)=>{
  const newCartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity:quantity,
    img:product.url,
    //url quantity come from card.js line 57
  };


  //below is state on line 25 copy array and add new thing to array
  //... is clone array
  // Old way
////const cloneSheeps = sheeps.slice();

// ES6 way
//const cloneSheepsES6 = [...sheeps];


  setCardItems([...cardItems, newCarditem])//newCradItem match line 48

} 
//below is function remove item from card
const removeItemFromCart =(index)=>{
const removeItem = cardItems[index];
const updateTotalPrice = totalPrice - removeItem.price*removeItem.quantity;
setTotalPrice(updateTotalPrice);
const updatedCartItems = cardItems.filter((_, i)=>i !== index)
//.filter is method  everything = to index filter will block
setCardItems(updatedCartItems)
}


  return (
    <div>
    <Header/> 
     <NavBar/>
<div className='mainBox-checkout'>
  
<h3>My Bag</h3>
{
  //below if else es6
  data ? (
    <>
    {/* //map is method  */}
    {data.map(product,index)=>{
      if (!products){
        return null
      }
      const Quantity = product.quantity
      return (
        <li key={product.id}>
          <div className='control2SmallBox'>
<div className='smallleftBox-showOrder'>
<div className='picLeft-checkout'>
<img src = {product.url}
alt={product.name} height={150} width={150}/>
</div>

<div className='textRight-checkout'>
  <span>{product.name}-${product.price}</span>
</div>
<div className='quantity-dropdown'>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
    Quantity: {quantity}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
          </div>
          </div>


        </li>
      )
    }}
    
    </>
  )  : ()
}
<div class="control2SmallBox">


  <div className='smallleftBox-showOrder'>
    
<div className='picLeft-checkout'></div>
<div className='textRight-checkout'>

  <h4>Dress1</h4>
  <p>ID:1234</p>
  <p>Price: "$35"</p>
  
  {/* dropdown */}


  
    </div>
  <div className='totalPrice'>
<p>Total $100</p>
  </div>

</div>

{/* smallbox right summary order */}

<div className='smallrightBox-orderSummary'>
  <h3>Order Summary</h3>

  <div className='control2box-subtotalAndNumber'>
    <div className='subtotal-text'>
<h4>Subtotal</h4>
<h4>Total</h4>
    </div>
    <div className='subtotal-number'>
<div>$0.00</div>
<div>$0.00</div>
</div>
  </div>

<input type="button" value="CHECK OUT" className='button-checkout'/>


</div>

</div>

  </div>

<Footer/>
    </div>
  )
}

export default MyBagCheckout