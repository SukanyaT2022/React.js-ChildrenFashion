import React, { useContext, useState } from 'react';
import './Header.css';
import img1 from '../../assets/images/ranbowLogoEdit.png';
// import img1 from '../../assets/images/rainbow1.jpg';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
//below import for log in pop up
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DataContext from '../../DataContext';

const Header = () => {
  //below we bring baycount state from dataProvider.js here
  const { bagCount } = useContext(DataContext);

  //handel logIn
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //below handle conatct us
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //handle search
  const [searchQury, setSearchQury] = useState('');
  const [filterResult, setFilterResult] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQury(e.target.value);
  };

  const navigate = useNavigate(); // this is a hook for link to the home page
  return (
    //onClick={()=>{navigate('/')}} below call the hook line 10 to link to home page
    <div className="bigBox-header">
      {/* //logo */}
      <div className="logo">
        <img src={img1} width={150} height={150} className="logoRainbow" />
      </div>

      {/* searchBox */}
      <div className="searchBox-BigBox">
        <input
          type="search"
          placeholder="Search"
          className="targetSearchBox"
          value={searchQury}
          onChange={handleSearchInputChange}
        />
        <a href="" className="controlSearchIcon">
          <FaSearch />
        </a>
      </div>

      <div className="logIn">
        <h5 onClick={handleShow}>
          <a href="">
            <FaRegUser />
          </a>
          LOGIN
        </h5>
        {/* //below handle contact us */}

        <div onClick={handleShow2} className="contactUs">
          <h5>CONTACT US</h5>
        </div>

        <p className="targetMybag" onClick={()=>navigate("/myBagCheckout")
        }>
          <h5>
            MY BAG
            {bagCount > 0 && (
              // <sup> is power2
              <sup style={{ backgroundColor: 'Pink', padding: '4px'}}>
                {bagCount}
              </sup>
            )}
          </h5>
        </p>
      </div>
      {/* code below for log in react boostrap */}

      <Modal show={show} onHide={handleClose}>
        <div className="targetBackground">
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="dark"
              onClick={handleClose}
              className="singin-button"
            >
              Sign In
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* //below contact us section */}
      <Modal show={show2} onHide={handleClose2}>
        <div className="targetBackground">
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Messages</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="dark" onClick={handleClose2}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
