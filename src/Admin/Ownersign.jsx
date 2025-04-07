import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Admin/Admin.css'
import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbaru from '../Compoents/Navbaru';

const Ownersign = () => {
  const[signup,setSignup]=useState({})
      const[error,setError]= useState({}) 
      
      const handleChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
        console.log(signup)
      }
  
      const navigate=useNavigate()
  
      const validate=()=>{
        const errorMessage={}
        
        if(!signup.restaurantName){
            errorMessage.restaurantName="Enter Name"
        }
        if(!signup.address){
          errorMessage.address="Enter Address"
      }
        if(!signup.phone){
            errorMessage.phone="Enter number"
        }
        else if(!(/^\d{10}$/).test(signup.phone)){
            errorMessage.phone="password should be 10 digits long"
        }
        if(!signup.email){
                  errorMessage.email="Enter email"
              }
              if(!signup.username){
                errorMessage.username="Enter username"
            }
          
              if(!signup.password){
                  errorMessage.password="Enter password"
              }
            setError(errorMessage)
              return Object.keys(errorMessage).length===0
             }
          
        
            const handleSubmit=(e)=>{
              if(!validate()){
                toast.error('failed')
            }
            e.preventDefault()
            axios.post("https://reactecomapi.onrender.com/owner/ownersignup",signup).then((response)=>{
              console.log(response)
              toast.success('sginup successfull')
              navigate('/login')
        
            }).catch((error)=>{
              console.log(error)
              toast.error(error.response?.data?.message || "signup failed")
            })

          }
        
  return (
    <>
    <div className='myimage'>
      <Navbaru/>
    <Form  className='frm2'  style={{height:'480px',marginTop:'-10px'}}>
    <h1 style={{color:'black'}}>OWNER</h1>
      
      
    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.username}</Form.Label>
      <Form.Control className='inpt'  type="text" placeholder="Username"  name="username" onChange={handleChange} required/>
    </div>

    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.phone}</Form.Label>
      <Form.Control className='inpt' type="tel" placeholder="Phone"  name="phone" onChange={handleChange} required/>
    </div>

    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.email}</Form.Label>
      <Form.Control className='inpt' type="mail" placeholder="Email" name="email" onChange={handleChange} required/>
    </div>
    
    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.name}</Form.Label>
      <Form.Control className='inpt' type="text" placeholder="Restaurant Name" name="restaurantName"  onChange={handleChange} required/>
    </div>
    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.name}</Form.Label>
      <Form.Control className='inpt' type="text" placeholder="Address" name="address"  onChange={handleChange} required/>
    </div>


    <div className='wrap2'>
      <Form.Label style={{color:'red'}}>{error.password}</Form.Label>
      <Form.Control  className='inpt' type="password" placeholder="Password"  name="password" onChange={handleChange} required/>
    </div>
    <Button className='btns' onClick={handleSubmit} href='/homead'>SIGNUP</Button>
  </Form>
  <ToastContainer/>
  </div>
  </>
  )
}
export default Ownersign
