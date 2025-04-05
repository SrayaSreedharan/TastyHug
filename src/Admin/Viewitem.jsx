import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Viewitem = () => {
  const[data,setData]=useState([])
  const loginId= localStorage.getItem("loginId")
  useEffect(()=>{
      axios.get(`https://reactecomapi.onrender.com/foods/products/${loginId}`).then((response)=>{
      console.log(response.data)
      localStorage.getItem("loginId")
      setData(response.data.data)
      }).catch((error)=>{
          console.log(error)
      })
  },[loginId])
  return (
    <div className='main'>
    <div className='row' style={{display:'flex',gap:'20px'}} >
    {data.map((items)=>(
         <Card  style={{ width: '18rem',height:'560px',marginTop:'-30px',backgroundColor:'black',color:'white'}}>
         <Card.Img variant="top" src={items.foodImage} />
         <Card.Body>
           <Card.Title></Card.Title>
           <Card.Text>
           Availability:
           {items.availability}
           </Card.Text>
           <Card.Text>
           Category:
           {items.category}
           </Card.Text>
           <Card.Text>
           createdAt:
           {items.createdAt}
           </Card.Text>
           <Card.Text>
           Description:
           {items.description}
           </Card.Text>
           <Card.Text>
           Name:
           {items.name}
           </Card.Text>
           <Card.Text>
           Preparation time:
           {items.preparationTime}
           </Card.Text>
           <Card.Text>
           Price
           {items.price}
           </Card.Text>
         </Card.Body>
       </Card> 
    )
    )}
    </div>
    </div>
  )
}

export default Viewitem
