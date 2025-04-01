
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Weoffer from './Pages/Weoffer';

function App() {
  

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/weoffer" element={<Weoffer/>}/> 
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
