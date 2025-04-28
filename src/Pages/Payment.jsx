import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/Payment.css'
import imge from '../Pages/pay2.png'
import axios from 'axios';

const Payment = () => {
  const[data,setData]=useState({})
  const[error,setError]=useState([])

  const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.name})
  }

  const validate=()=>{
    const errormsg={}
    if(!data.name){
      errormsg.name="Enter Name"
    }
    if(!data.card){
      errormsg.card="Enter Cardname"
    }
    if(!data.number){
      errormsg.number="Enter Cardno"
    }
    if(!data.date){
      errormsg.date="Enter Date"
    }
    setError(errormsg)
      return Object.keys(errormsg).length==0
  }

  const handleSubmit=(e)=>{
    if(!validate()){
      console.log("validation error")
    }
    e.preventDefault()
    const loginId=localStorage.getItem('loginId')
    axios.post(`https://reactecomapi.onrender.com/foods/placeOrder/${loginId}`).then((response)=>{
      console.log(response) 
      alert("your order placed")
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>   
    <div className='bg'>
    <Form>
    <h1 style={{marginTop:'120px',color:'orangered'}}>CARD DETAILS</h1>
    <div className="container">
        <div className="row">
            <div>
            <div>
                <div className="cad p-3">
                    <div className="img-box">
                        <img src={imge} alt="" />
                    </div>
                    <div className="number" style={{textAlign:'center',color:'white',marginLeft:'-10px'}}><label className="fw-bold">**** **** **** 1060</label></div>
                    <div  style={{textAlign:'center',color:'white',marginLeft:'-10px'}}><span>Expiry date:</span><span>10/16</span></div>
                </div>
            </div>
      <div>
        <label style={{color:"red",marginLeft:"-66px"}}>{error.name}</label>
      <input type="text" className='inpt2'  placeholder="NAME" name='name'  style={{marginTop:'-20px'}}  onChange={handlechange}/></div>
      <div><label style={{color:"red",marginLeft:"-66px"}}>{error.card}</label>
      <input type="select"  className='inpt2'  placeholder="NAME ON CARD"  name='card' style={{marginTop:'-20px'}} onChange={handlechange}/></div>
      <div><label style={{color:"red",marginLeft:"-66px"}}>{error.number}</label>
      <input  type="number" className='inpt2'  placeholder="CARD NUMBER"  name='number' style={{marginTop:'-20px'}} onChange={handlechange}/></div>
      <div><label style={{color:"red",marginLeft:"-66px"}}>{error.date}</label>
      <input type="date" className='inpt2'  placeholder="EXPIRY DATE"  name='date'  style={{marginTop:'-20px'}} onChange={handlechange} /></div>
    <Button  className='btn4' type="submit" onClick={handleSubmit}>PAY</Button>
  </div>
  </div>
  </div>
  </Form>          
    </div>
  </>
  )
}
export default Payment
