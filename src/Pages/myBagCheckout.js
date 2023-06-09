import React, { useState } from 'react'
import Layout from '../component/Layout/layout'
import Header from '../component/header/Header'
import NavBar from '../component/header/Navbar'
import Footer from '../component/footer/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import './myBagCheckout.css'

const MyBagCheckout = () => {
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

const addItemToCart =(product)=>{
  const newCartItem = {
    id: product.id,
    name: product.name,
    price: product.price
  };

  //below is state on line 25 copy array and add new thing to array
  //... is clone array
  // Old way
////const cloneSheeps = sheeps.slice();

// ES6 way
//const cloneSheepsES6 = [...sheeps];


  // setCardItems([...cardItems, newCarditems])


} 
  return (
    <div>
    <Header/> 
     <NavBar/>
<div className='mainBox-checkout'>
  
<h3>My Bag</h3>
<div class="control2SmallBox">


  <div className='smallleftBox-showOrder'>
    
<div className='picLeft-checkout'>picture here </div>
<div className='textRight-checkout'>

  <h4>Dress1</h4>
  <p>ID:1234</p>
  <p>Price: "$35"</p>
  
  {/* dropdown */}


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
    Quantity
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  <div className='totalPrice'>
<p>Total $100</p>
  </div>

</div>

{/* smallbox right summary order */}

<div className='smallrightBox-orderSummary'>

</div>

</div>

  </div>

<Footer/>
    </div>
  )
}

export default MyBagCheckout