import React, { useState } from 'react';
import './Header.css';
import img1 from '../../assets/images/ranbowLogoEdit.png';
// import img1 from '../../assets/images/rainbow1.jpg';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { Router, useNavigate } from 'react-router-dom';
//below import for log in pop up
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
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

const handleSearchInputChange =(e)=> {
  setSearchQury(e.target.value)

}



  const navigate = useNavigate(); // this is a hook for link to the home page
  return (
    //onClick={()=>{navigate('/')}} below call the hook line 10 to link to home page
    <div
      className="bigBox-header"
      onClick={() => {
        navigate('/');
      }}
    >
      {/* //logo */}
      <div className="logo">
        <img src={img1} width={150} height={150} className="logoRainbow" />
      </div>

{/* searchBox */}
      <div className="searchBox-BigBox">
        <input type="search" placeholder="Search" className="targetSearchBox" value={searchQury} onChange={handleSearchInputChange}/>
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
        
        <div onClick={handleShow2} className='contactUs'>
          CONTACT US
          </div>



        <a href='/myBagCheckout' className='aTagMybag'><h5>MY BAG</h5></a>
      </div>
      {/* code below for log in react boostrap */}

      <Modal show={show} onHide={handleClose}className='targetBackground'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

{/* //below contact us section */}
<Modal show={show2} onHide={handleClose2}className='targetBackground'>
        <Modal.Header closeButton>
          <Modal.Title>Contact US</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>





    </div>
  );
};

export default Header;
