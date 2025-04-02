import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import '../Pages/Payment.css'

const Payment = () => {
  const handleSubmit=()=>{
    const loginId= localStorage.getItem("loginId")
    console.log(loginId)
   axios.post("https://reactecomapi.onrender.com/order/checkout",{loginId}).then((response)=>{
        console.log(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}
  return (
    <>    
    <div className='bg'>
    <Form>
    <h1 >CARD DETAILS</h1>
      <div><Form.Label  ></Form.Label>
      <Form.Control type="text" placeholder="NAME" name='name'/></div>{<br></br>}
      <div><Form.Label></Form.Label>
      <Form.Control type="tel" placeholder="PHONE NUMBER"  name='number'/></div>{<br></br>}
      <div><Form.Label></Form.Label>
      <Form.Control type="text" placeholder="NAME ON CARD"  name='name'/></div>{<br></br>}
      <div><Form.Label></Form.Label>
      <Form.Control type="number" placeholder="CARD NUMBER"  name='number'/></div>{<br></br>}
      <div><Form.Label></Form.Label>
      <Form.Control type="number" placeholder="EXPIRY DATE"  name='number'/></div>{<br></br>}
    <Button variant="primary" type="submit" style={{backgroundColor:'black',width:'150px'}} onClick={handleSubmit}>PAY</Button>
  </Form>
  </div>
  </>
  )
}
export default Payment
