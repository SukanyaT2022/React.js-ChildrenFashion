import React from 'react'
import Layout from '../component/Layout/layout'
import Card from '../component/Card/Card'
import { dress as dresses } from '../component/Card/data' // this line from data.js -const dress link to line 10{dress}

const Dress = () => {
  return (
    <div>
    <Layout>
    <h3 className='text-center mt-5'>Shop Girl's Dresses</h3>
    <Card data={dresses}/>
    </Layout>
    </div>
  )
}

export default Dress