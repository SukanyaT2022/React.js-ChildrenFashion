import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='MainCard'>


      <div className='smallBox-card'>
        <div className='imageBox'>
           
               <img src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"   width="200px" height="200px" />
            </div>
            <div className='targetSale'>SALE</div> 
            <div className='targetHover'>Quick View</div>
       
        <div className='card-text'>
            <h3>Flame Set</h3>
            <p>  Reviews</p>
            <p>$40<del>$30</del></p>
        </div>
        </div>
    </div>
  )
}

export default Card