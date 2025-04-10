import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbarwe from '../Compoents/Navbarwe'
import '../Pages/Main.css'
import  Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


const Steamedfood = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
      axios.get("https://reactecomapi.onrender.com/foods/products").then((response)=>{
          console.log(response)
          setData(response.data)
      }).catch((error)=>{
          console.log(error)
      })

  },[])
  return (
    <>
    <div className='main'>
    <Navbarwe/>
    <div className='row'  style={{display:'flex',gap:'20px'}} >
    {data.map((items)=>(
        <Card  style={{ width: '18rem',height:'560px',marginTop:'-30px',backgroundColor:'black',color:'white'}}>
        <Card.Img variant="top" src={items.foodImage} style={{height:'150px',width:'150px',marginLeft:'50px',marginTop:'10px'}} />
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
          <Button type='submit'className='btn2'  style={{backgroundColor:'orangered',width:'150px',marginLeft:'40px',marginTop:'-10px'}} href='/pay' >ORDER NOW</Button>
        </Card.Body>
      </Card> 
    )
    )}
    </div>
    </div>
    </>
  )
}
export default Steamedfood
