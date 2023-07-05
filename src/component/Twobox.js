import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Twobox = () => {
  return (


<div className='main-section2Home section2'>
<Container>
  
      <Row>
        <Col xs={12}>
        <img src='https://images.pexels.com/photos/4982530/pexels-photo-4982530.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <p>+ NEW ARRIVAL</p>
        </Col>

        <Col xs={12}>
        <img src = 'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=800'/>
        <p>PROJECT GAP &gt;</p>
        </Col>
      
      </Row>
    </Container>
</div>

  )
}

export default Twobox