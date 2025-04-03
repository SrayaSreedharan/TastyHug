
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Weoffer from './Pages/Weoffer';
import Steamedfood from './Pages/Steamedfood';
import Arabicfood from './Pages/Arabicfood';
import Riceitem from './Pages/Riceitem';
import Italianfood from './Pages/Italianfood';
import Seafood from './Pages/Seafood';
import Vegitem from './Pages/Vegitem';
import Payment from './Pages/Payment';
import Order from './Pages/Order';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/weoffer" element={<Weoffer/>}/> 
      <Route path="/steam" element={<Steamedfood/>}/> 
      <Route path="/Arabic" element={<Arabicfood/>}/> 
      <Route path="/rice" element={<Riceitem/>}/> 
      <Route path="/italian" element={<Italianfood/>}/> 
      <Route path="/seafood" element={<Seafood/>}/> 
      <Route path="/veg" element={<Vegitem/>}/> 
      <Route path="/pay" element={<Payment/>}/>
      <Route path="/order" element={<Order/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contactus/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
