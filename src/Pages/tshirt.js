import React from 'react'
import Layout from '../component/Layout/layout'
import Card from '../component/Card/Card'
import { shirt } from '../component/Card/data' // this line from data.js link to line 10{shirt}
const tshirt = () => {
  return (
    <div>
  <Layout>
    <p>TOPS & T-SHIRTS</p>
    <Card data={shirt}/>
  </Layout>
  </div>
  )
}

export default tshirt