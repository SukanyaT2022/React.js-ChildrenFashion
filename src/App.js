import './App.css';
import Header from './component/header/Header';
import Navbar from './component/header/Navbar';
import BigHero from './component/BigHero/BigHero';
import Card from './component/Card/Card';
import Footer from './component/footer/Footer';
// footer is name folder Footer is file name

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tshirt' element={<Tshirt/>}/>  
         <Route path='/dress' element={<Dress/>}/>
         <Route path='/accessories' element={<Accessories/>}/>
         <Route path='/logIn' element={<Login/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
