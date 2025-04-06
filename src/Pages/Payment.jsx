import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/Payment.css'
import imge from '../Pages/pay2.png'

const Payment = () => {

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
                    <div className="number" style={{textAlign:'center',color:'white'}}><label class="fw-bold">**** **** **** 1060</label></div>
                    <div  style={{textAlign:'center',color:'white'}}><span>Expiry date:</span><span>10/16</span></div>
                </div>
            </div>
      <div>
        <Form.Label  ></Form.Label>
      <Form.Control className='inpt2' type="text" placeholder="NAME" name='name'required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control className='inpt2'  type="select" placeholder="NAME ON CARD"  name='name' required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control  className='inpt2' type="number" placeholder="CARD NUMBER"  name='number' required/></div>
      <div><Form.Label></Form.Label>
      <Form.Control  className='inpt2' type="date" placeholder="EXPIRY DATE"  name='number' required/></div>
    <Button  className='btn3' type="submit">PAY</Button>
  </div>
  </div>
  </div>
  </Form>          
    </div>
  </>
  )
}
export default Payment
