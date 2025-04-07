import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const Viewitem = () => {
  const[data,setData]=useState([])
  const loginId= localStorage.getItem("loginId")
  useEffect(()=>{
      axios.get(`https://reactecomapi.onrender.com/foods/products/${loginId}`).then((response)=>{
      console.log(response.data)
      localStorage.getItem("loginId")
      setData(response.data)
      }).catch((error)=>{
          console.log(error)
      })
  },[loginId])
  const buttonClick=(id)=>{
    const prdId=id
    console.log(id)
    axios.delete(`https://reactecomapi.onrender.com/foods/deleteproducts/${prdId}`).then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
    <div  style={{display:'flex',gap:'20px'}} >
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
         <Button  type='submit' onClick={()=>buttonClick(items._id)}>DELETE</Button>
       </Card>  
    )
    )}
    </div>
    </div>
  )
}
export default Viewitem
