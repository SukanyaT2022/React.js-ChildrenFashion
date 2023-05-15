import React from 'react'
import Header from '../header/Header'
import NavBar from '../header/Navbar'
import Footer from '../footer/Footer'
import BigHero from '../BigHero/BigHero'

const layout = ({children}) => {
  return (
    <div>
     <Header/> 
     <NavBar/>
     <BigHero/>
     {children}
     <Footer/>
   

    </div>
  )
}

export default layout