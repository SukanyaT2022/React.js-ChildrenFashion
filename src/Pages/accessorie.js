import React from 'react'
import Layout from '../component/Layout/layout'
import Card from '../component/Card/Card'
import {accesories} from '../component/Card/data' // this line from data.js -const   accesories  link to line 162 accesories on data.js
const Accessorie = () => {
  return (
    <>
   <Layout>
   <h3 className='text-center mt-5'>Accesories | Jewelry</h3>
    <Card data = {accesories}/>
    {/* // from line 162 on data.js const accesories need to match */}
   </Layout>
   </>
  )
}

export default Accessorie