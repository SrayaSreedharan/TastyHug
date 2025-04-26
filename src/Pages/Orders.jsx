import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbarwe from '../Compoents/Navbarwe'
import '../Pages/Order.css'
import  Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const Orders = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const loginId=localStorage.getItem("loginId")
        axios.get(`https://reactecomapi.onrender.com/foods/getOrders/${loginId}`).then((response)=>{
            console.log(response)
            setData(response.data.orders)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleSubmit=(id)=>{
        const orderId=id
        axios.patch(`https://reactecomapi.onrender.com/foods/cancelOrder/${orderId}`).then((response)=>{
            console.log(response)
            const filtered=data.filter((item)=>{
                return item._id !== orderId
            })
            setData(filtered)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='order'>
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
           <Button type='submit'className='btn2'  style={{backgroundColor:'white',color:'black',width:'150px',marginLeft:'40px',marginTop:'-10px'}} onClick={()=>handleSubmit(items._id)}> CANCEL ORDER</Button>
         </Card.Body>
       </Card> 
    )
    )}
    </div>
      
    </div>
  )
}

export default Orders
