import React from 'react'
import Layout from '../component/Layout/layout'
import Card from '../component/Card/Card'
import { dress as dresses } from '../component/Card/data' // this line from data.js -const dress link to line 10{dress}

const Dress = () => {
  return (
    <div>
    <Layout>
    <p>Shop Girl's Dresses</p>
    <Card data={dresses}/>
    </Layout>
    </div>
  )
}

export default Dress