import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/Login.css'
import Navbars from '../Compoents/Navbars';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const[login,setLogin]=useState({})
    const[error,setError]=useState({})
    const handleChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
      console.log(login)
    }
    // const navigate=useNavigate()
    const validate=()=>{
    const errorMessage={}
      
    if(!login.username){
     errorMessage.username="Enter Name"
    }
    if(!login.password){
        errorMessage.password="Enter password"
    }
  setError(errorMessage)
    return Object.keys(errorMessage).length===0
   }

    const handleSubmit=(e)=>{
      if(!validate()){
        console.log("error")
        toast.error('validation failed')
    }
      e.preventDefault()
      axios.post("https://reactecomapi.onrender.com/auth/login",login).then((response)=>{
        console.log(response)
        toast.success('successfully')
        localStorage.setItem("loginId",response.data.loginId)
       
      }).catch((error)=>{
        console.log(error)
        toast.error(error.response?.data?.message || "login failed ")
      })
    }
  return (
    <>
   
   
   <div className='nrml'>
   <Navbars/>
    <Form >
    <h1>LOGIN</h1>
    <div className='wrap'>
      <Form.Label  style={{color:'red'}}>{error.username}</Form.Label>
      <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange} />
    </div>
    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <Form.Control type="password" placeholder="Password"  name='password' onChange={handleChange} style={{marginTop:'30px'}}/>
    </div>
    <Button variant="primary" type="submit" onClick={handleSubmit}>LOGIN</Button>
  </Form>
  </div>
 
                         {/* responsive view */}
 <Navbars/>
  <div className='mobile'>
  
    <Form style={{height:'380px'}}>
    <h1>LOGIN</h1>
    <div className='wrap'>
      <Form.Label  style={{color:'red'}}>{error.username}</Form.Label>
      <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange} />
    </div>
    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <Form.Control type="password" placeholder="Password"  name='password' onChange={handleChange} style={{marginTop:'30px'}}/>
    </div>
    <Button id='btn' variant="primary" type="submit" onClick={handleSubmit}  style={{marginTop:'20px'}}>LOGIN</Button>
  </Form>
  </div>
  <ToastContainer/>
  </>
  )
}

export default Login
