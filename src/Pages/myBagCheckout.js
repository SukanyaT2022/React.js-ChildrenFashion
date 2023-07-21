import React, { useContext, useState, useEffect } from 'react';
import Layout from '../component/Layout/layout';
import Header from '../component/header/Header';
import NavBar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import './myBagCheckout.css';
import DataContext from '../DataContext';

const MyBagCheckout = () => {
  const { data,removeItem } = useContext(DataContext);
  const [cardItems, setCardItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let startTotalPrice = 0;
    cardItems.forEach((item) => {
      startTotalPrice += item.price * item.quantity;
    });
    setTotalPrice(startTotalPrice);
  }, [cardItems]);

  useEffect(() => {
    let startTotalPrice = 0;
    cardItems.forEach((item) => {
      startTotalPrice += item.price * item.quantity;
    });
    setTotalPrice(startTotalPrice);
  }, []);

  const addItemToCart = (product, quantity) => {
    const existingCartIndex = cardItems.findIndex((item)=>item.id === product.id)
    if (existingCartIndex !== -1){
      const updatedCartItems = [...cardItems]
      updatedCartItems[existingCartIndex].quantity=quantity
      setCardItems(updatedCartItems)
    }else{
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        img: product.url,
      };
      setCardItems([...cardItems, newCartItem]);
    };

    }

  const removeItemFromCart = (index) => {
    const updatedCartItems = cardItems.filter((item) => item.id !== index);
    setCardItems(updatedCartItems);
    removeItem(index)
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className='wrapper-mainCheckbag'>
      <div className="mainBox-checkout">
        <h3>My Bag</h3>
        {data ? (
          <>
            {data.map((product, index) => {
              if (!product) {
                return null;
              }
             const existingCartItem = cardItems.find((Item)=>Item.id === product.id);
             const quantity = existingCartItem ? existingCartItem.quantity : 1;
              return (
                <ul className='controlUL'>
                <li key={product.id}>
                  <div className="control2SmallBox">
                    <div className="smallleftBox-showOrder">
                      <div className="picLeft-checkout">
                        <img src={product.url} alt={product.name} height={300} width={300} className='controlImageCheckout'/>
                      </div>
                      <div className="textRight-checkout">
                        <span>
                          {product.name}  <br/>
                          Price: ${product.price}
                        </span>
                      </div>
                      <div className="quantity-dropdown">
                        <Dropdown onSelect={(newQuantity)=>addItemToCart(product,parseInt(newQuantity))}>
                          <Dropdown.Toggle className='controlDropdown' id="dropdown-basic">
                            Quantity: {quantity}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <button className='controlRemoveButtonCart' onClick={() => removeItemFromCart(product.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
                </ul>
              );
            })}
            <div className="smallrightBox-showOrder">Total Price ${totalPrice}</div>
          </>
        ) : (
          <p>Please Choose items</p>
        )}
      
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBagCheckout;