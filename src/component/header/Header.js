import React from 'react';
import './Header.css';
import img1 from '../../assets/images/ranbowLogoEdit.png';
// import img1 from '../../assets/images/rainbow1.jpg';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate(); // this is a hook for link to the home page 
  return (
    //onClick={()=>{navigate('/')}} below call the hook line 10 to link to home page
    <div className="bigBox-header" onClick={()=>{navigate('/')}}>
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
