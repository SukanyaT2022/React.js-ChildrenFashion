import React from 'react'
import './home.css'
import Navbar from './../component/header/Navbar'
import Layout from '../component/Layout/layout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <>
<Layout>
<div className='mainBox-sectionOne'>
  <div className='control-redBox'>
    <h3>Up to 50% off Summer Sale</h3>
    <h3>Discount taken from $5</h3>

  </div>
  <div className='control2Box-sectionOne'>
<h1>SALE</h1>
<h3>ONLINE AND IN STORES</h3>
  </div>
</div>
{/* END SECTION 1 */}

{/* start section 2 */}

<div className='main-section2Home'>
<Container>
  
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>


</div>




{/* line below we call component card to use on this page */}
 </Layout>
     
     </>
  )
}

export default Home