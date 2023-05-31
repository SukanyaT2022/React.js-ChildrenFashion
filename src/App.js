import './App.css';
import Home from './Pages/home';
import Accessorie from './Pages/accessorie';
// import Contact from './Pages/contact';
import Dress from './Pages/dress';
// import LogIn from './Pages/logIn';
import Tshirt from './Pages/tshirt';



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
         <Route path='/accessorie' element={<Accessorie/>}/>
         {/* <Route path='/login' element={<LogIn/>}/> */}
         {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
