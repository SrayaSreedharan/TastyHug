import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/Payment.css'
import imge from '../Pages/pay2.png'
import axios from 'axios';

const Payment = () => {

  const handleSubmit=()=>{
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
                    <div className="number" style={{textAlign:'center',color:'white',marginLeft:'-10px'}}><label class="fw-bold">**** **** **** 1060</label></div>
                    <div  style={{textAlign:'center',color:'white',marginLeft:'-10px'}}><span>Expiry date:</span><span>10/16</span></div>
                </div>
            </div>
      <div>
        <Form.Label  ></Form.Label>
      <Form.Control className='inpt2' type="text" placeholder="NAME" name='name'  style={{marginTop:'-20px'}} required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control className='inpt2'  type="select" placeholder="NAME ON CARD"  name='name' style={{marginTop:'-20px'}}  required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control  className='inpt2' type="number" placeholder="CARD NUMBER"  name='number' style={{marginTop:'-20px'}}  required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control  className='inpt2' type="date" placeholder="EXPIRY DATE"  name='number'  style={{marginTop:'-20px'}}  required/></div>
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
