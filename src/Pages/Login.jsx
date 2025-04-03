import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/Login.css'
import Navbars from '../Compoents/Navbars';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[login,setLogin]=useState({})
    const[error,setError]=useState({})
    const handleChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
      console.log(login)
    }
    const navigate=useNavigate();
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
        navigate('/weoffer')
      }).catch((error)=>{
        console.log(error)
        toast.error(error.response?.data?.message || "login failed ")
      })
    }



  return (
    <>
   <div className='nrml'>
   <Navbars/>
    <Form className='frm'  >
    <h1>LOGIN</h1>
    <div >
      <Form.Label  style={{color:'red'}}>{error.username}</Form.Label>
      <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange} />
    </div>
    <div>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <Form.Control type="password" placeholder="Password"  name='password' onChange={handleChange} style={{marginTop:'30px'}}/>
    </div>
    <Button  type="submit" className='btn2'   onClick={handleSubmit}>LOGIN</Button>
  </Form>
  <ToastContainer/>
  </div>
  </>
  )
}
export default Login
