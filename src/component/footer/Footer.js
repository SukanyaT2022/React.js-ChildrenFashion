import React from 'react';
import './Footer.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaRainbow } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="mainBox-footer">

        {/* box1 */}
        <div className="samllBox-footer controlBox1">
          <h2>Customer Support</h2>
          <form className="controlInputBox">
            <input
              type="email"
              placeholder="Enter your email address"
              className="controlInputEmail"
            />
            <input type="submit" value="Join" className="controlSubmitBox" />
          </form>

          <p className="controlTextJoin">
            *Valid for first-time registrants only & applies to reg. priced
            items only.
          </p>
        </div>

        {/* box2 */}

        <div className="samllBox-footer moveSmallBoxLeft useForMediaQuerie1">
          <h2>Customer Support</h2>

          <ul className="controlUL">
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Refund Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Privacy Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              FAQ
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Shipping
            </li>
          </ul>
        </div>

        {/* box3 */}

        <div className="samllBox-footer moveSmallBoxLeft useForMediaQuerie2">
          <h2>Customer Support</h2>

          <ul className="controlUL">
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Refund Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Privacy Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              FAQ
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Shipping
            </li>
          </ul>
        </div>

        {/* box4 */}

        <div className="samllBox-footer moveSmallBoxLeft useForMediaQuerie3">
          <h2>Customer Support</h2>

          <ul className="controlUL">
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Refund Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Privacy Policy
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              FAQ
            </li>
            <li>
              <FaRainbow className="controlRaibowFooter" />
              Shipping
            </li>
          </ul>
        </div>
      </div>
      {/* copy right section */}
   
<div className='copyRight'>
<hr/>
  <small>&copy;copyRight 2023 by Tiparpron Sukanya</small>

</div>








      {/* <Row xs={1} sm={2} md={2} lg={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}
    </div>
  );
};

export default Footer;
