import React, { useContext, useState, useEffect } from 'react';
import Layout from '../component/Layout/layout';
import Header from '../component/header/Header';
import NavBar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import './myBagCheckout.css';
import DataContext from '../DataContext';

const MyBagCheckout = () => {
  const { data } = useContext(DataContext);

  const [cardItems, setCardItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let startTotalPrice = 0;
    cardItems.forEach((item) => {
      startTotalPrice += item.price * item.quantity;
    });
    setTotalPrice(startTotalPrice);
  }, [cardItems]);

  const addItemToCart = (product, quantity) => {
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      img: product.url,
    };
    setCardItems([...cardItems, newCartItem]);
  };

  const removeItemFromCart = (index) => {
    const removeItem = cardItems[index];
    const updateTotalPrice = totalPrice - removeItem.price * removeItem.quantity;
    setTotalPrice(updateTotalPrice);
    const updatedCartItems = cardItems.filter((_, i) => i !== index);
    setCardItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="mainBox-checkout">
        <h3>My Bag</h3>
        {data ? (
          <>
            {data.map((product, index) => {
              if (!product) {
                return null;
              }
              const quantity = product.quantity;
              return (
                <li key={product.id}>
                  <div className="control2SmallBox">
                    <div className="smallleftBox-showOrder">
                      <div className="picLeft-checkout">
                        <img src={product.url} alt={product.name} height={150} width={150} />
                      </div>
                      <div className="textRight-checkout">
                        <span>
                          {product.name}-${product.price}
                        </span>
                      </div>
                      <div className="quantity-dropdown">
                        <Dropdown onSelect={(newQuantity)=>addItemToCart(product,parseInt(newQuantity))}>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Quantity: {quantity}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <button onClick={() => removeItemFromCart(index)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="smallrightBox-showOrder">Total Price ${totalPrice}</div>
          </>
        ) : (
          <p>Please Choose items</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBagCheckout;