
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Ownersign from './Admin/Ownersign';
import Homead from './Admin/Homead';
import Viewitem from './Admin/Viewitem';
import Owneradd from './Admin/Owneradd';
import Ownerupdate from './Admin/Ownerupdate';
import Addcart from './Pages/Addcart';
import Orders from './Pages/Orders';

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
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contactus/>}/> 
      <Route path="/owner" element={<Ownersign/>}/> 
      <Route path="/homead" element={<Homead/>}/>
      <Route path="/view" element={<Viewitem/>}/>
      <Route path="/add" element={<Owneradd/>}/>
      <Route path="/update" element={<Ownerupdate/>}/>
      <Route path="/addcart" element={<Addcart/>}/>
      <Route path="/order" element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
