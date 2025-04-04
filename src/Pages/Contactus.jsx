import React from 'react'
import Navbarwe from '../Compoents/Navbarwe';
import '../Pages/Contactus.css'

const Contactus = () => {
  return (
    <>
    <div className='contact'>
      <Navbarwe/>
    <h2 style={{textAlign:'center',marginTop:'100px',color:'white'}}>Get In Touch</h2>
    <div className='cnt' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',marginTop:'70px'}}>
     <div style={{height:'200px',width:'220px',textAlign:'center',borderRadius:'100px',color:'white'}}>
      <h5>Address</h5>
      <p>Thiruvanthapuram{<br></br>}Kazhakoottam,land street{<br></br>}Kerala.India</p>
     </div>
     <div style={{height:'200px',width:'220px',textAlign:'center',borderRadius:'100px',color:'white'}}>
      <h4>Phone</h4>
      <p>0490-264567{<br></br>} 9834267810{<br></br>} 0491-6738257</p>
     </div>
     <div style={{height:'200px',width:'260px',textAlign:'center',borderRadius:'100px',color:'white'}}>
      <h6>Mail</h6>
      <p>Enguiry:info@tastyhug@gmail.com{<br></br>}Sales:sales@tastyhug@gmail.com</p>
      </div>
    </div>
    </div>
    </>
  )
}
export default Contactus
