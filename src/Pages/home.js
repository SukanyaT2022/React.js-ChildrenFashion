import React from 'react'
import './home.css'
import Navbar from './../component/header/Navbar'
import Layout from '../component/Layout/layout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Twobox from '../component/Twobox';


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
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
</div>
{/* text in between */}
<div>
  <h2 className='text-center controlh2backtSchool'>Made a back-to-school list.</h2>
</div>
{/* section2 */}
<Twobox/>

{/* section 3 */}

{/* text in between */}
<div>
  <h2 className='text-center py-4 controlh2backtSchool controlPhoneSize'>Sunrise to Sunset</h2>
</div>

{/* section 3 */}
<div className='main-section2Home section2  controlPicSection3 mb-3'>
<Container>
  
      <Row>
        {/* each row have 12 colume so ipad have 2 on top which 6
         and 2 box at bottom which is another 6 */}
        <Col md={6} xs={12}>
        <img src='https://images.pexels.com/photos/5325700/pexels-photo-5325700.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <p>+ NEW ARRIVAL</p>
        </Col>

        <Col md={6} xs={12}>
        <img src = 'https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=800'/>
        <p>VACATION SHOP &gt;</p>
        </Col>

        <Col md={6} xs={12}>
        <img src = 'https://images.pexels.com/photos/9035942/pexels-photo-9035942.jpeg?auto=compress&cs=tinysrgb&w=800'/>
        <p>BOY &gt;</p>
        </Col>

        <Col md={6} xs={12}>
        <img src = 'https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=800'/>
        <p>GIRL &gt;</p>
        </Col>
      
      </Row>
    </Container>
</div>



{/* line below we call component card to use on this page */}
 </Layout>
     
     </>
  )
}

export default Home