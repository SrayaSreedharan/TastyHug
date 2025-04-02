import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbarwe from '../Compoents/Navbarwe'
import '../Pages/Main.css'
import  Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const Seafood = () => {
 const[data,setData]=useState([])
   useEffect(()=>{
       axios.get(" https://reactecomapi.onrender.com/prop/getall").then((response)=>{
           console.log(response)
           setData(response.data.data)
       }).catch((error)=>{
           console.log(error)
       })
 
   },[])
   return (
     <>
     <div className='main'>
     <Navbarwe/>
     <div style={{display:'flex',gap:'20px'}} >
     {data.map((items)=>(
         <Card  style={{ width: '18rem' }}>
         <Card.Img variant="top" src={items.propimages} />
         <Card.Body>
           <Card.Title></Card.Title>
           <Card.Text>
           Product Description:
           {items.propDescription}
           </Card.Text>
           <Card.Text>
           Product Name:
           {items.propName}
           </Card.Text>
           <Card.Text>
           Product Prize:
           {items.propPrize}
           </Card.Text>
           <Card.Text>
           Product Type:
           {items.propType}
           </Card.Text>
           <Button type='submit' style={{backgroundColor:'black',width:'150px'}}>ORDER NOW</Button>
         </Card.Body>
       </Card> 
     )
     )}
     </div>
     </div>
     </>
   )
 }

export default Seafood
