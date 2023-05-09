import './App.css';
import Header from './component/header/Header';
import Navbar from './component/header/Navbar';
import BigHero from './component/BigHero/BigHero';
import Card from './component/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <div className='header'> */}
      <Header />
      {/* </div> */}
      {/* <div className='navBar'> */}
      <Navbar />
      {/* </div> */}
     <BigHero/>

      <div className="Card"><Card/></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
