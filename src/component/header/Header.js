import React from 'react';
import './Header.css';
import img1 from '../../assets/images/ranbowLogoEdit.png';
// import img1 from '../../assets/images/rainbow1.jpg';
import { FaRegUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bigBox-header">
      <div className="logo">
        <img src={img1} width={150} height={150} className='logoRainbow'/>
      </div>

      <div className="searchBox-BigBox">
     <input type="search" placeholder='Search' className="targetSearchBox"/>
     <a href="" className='controlSearchIcon'><FaSearch/></a>

     </div>

      <div className="logIn">
      <h4><FaRegUser/>LOGIN</h4>
      <h4>CONTACT US</h4>
      <h4>MY BAG</h4>
   


      </div>
    </div>

  );
};

export default Header;
