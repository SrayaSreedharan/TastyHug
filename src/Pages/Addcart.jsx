import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Card from 'react-bootstrap/Card'
import '../Pages/Main.css'
import { Button } from 'react-bootstrap'
import Navbarwe from '../Compoents/Navbarwe'

const Addcart = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
      const loginId=localStorage.getItem("loginId")
      axios.get(`https://reactecomapi.onrender.com/foods/getCart/${loginId}`).then((response)=>{
        console.log(response.data.cartItems)
        setData(response.data.cartItems)
      }).catch((error)=>{
        console.log(error)
      })

    },[])

    const buttonclick=(id)=>{
      const productId=id
      console.log(productId)
      const loginId=localStorage.getItem("loginId")
      axios.delete(`https://reactecomapi.onrender.com/foods/deleteFromCart/${loginId}/${productId}`).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
      
    }
  return (
    <div className='main'>
      <Navbarwe/>
       <div className='row' style={{display:'flex',gap:'20px'}} >
        {data.map((items)=>(
         <Card  style={{ width: '18rem',height:'560px',marginTop:'-30px',backgroundColor:'black',color:'white'}}>
         <Card.Img variant="top" src={items.productId.foodImage} style={{height:'150px',width:'150px',marginLeft:'50px',marginTop:'10px'}}/>
         <Card.Body>
           <Card.Title></Card.Title>
           <Card.Text>
           Availability:
           {items.productId.availability ? 'available': 'not available'}
           </Card.Text>
           <Card.Text>
           Category:
           {items.productId.category}
           </Card.Text>
           <Card.Text>
           createdAt:
           {items.createdAt}
           </Card.Text>
           <Card.Text>
           Description:
           {items.productId.description}
           </Card.Text>
           <Card.Text>
           Name:
           {items.productId.name}
           </Card.Text>
           <Card.Text>
           Preparation time:
           {items.productId.preparationTime}
           </Card.Text>
           <Card.Text>
           Price
           {items.productId.price}
           </Card.Text>
           <Button type='submit'className='btn2'  style={{backgroundColor:'orangered',width:'100px',marginTop:'-10px'}}>ORDER</Button>
           <Button type='submit'className='btn2'  style={{backgroundColor:'red',width:'100px',marginLeft:'20px',marginTop:'-10px',color:'white'}} onClick={()=>buttonclick(items._id)} >DELETE</Button>

         </Card.Body>
       </Card> 
    )
    )}
    </div>
    </div>
  )

}

export default Addcart
