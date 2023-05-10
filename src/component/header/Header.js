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
      <h5><a href=""><FaRegUser/></a>LOGIN</h5>
      <h5>CONTACT US</h5>
      <h5>MY BAG</h5>
   


      </div>
    </div>

  );
};

export default Header;
