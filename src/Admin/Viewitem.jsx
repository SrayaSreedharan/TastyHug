import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../Admin/View.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'

const Viewitem = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    const loginId= localStorage.getItem("loginId")
      axios.get(`https://reactecomapi.onrender.com/foods/products/${loginId}`).then((response)=>{
      console.log(response.data)
      setData(response.data)
      }).catch((error)=>{
          console.log(error)
      })
  },[])
  const buttonClick=(id)=>{
    const prdId=id
    console.log(id)
    axios.delete(`https://reactecomapi.onrender.com/foods/deleteproducts/${prdId}`).then((response)=>{
      console.log(response)
      const filtered=data.filter((items)=>{
        return items._id !== prdId;
      })
      setData(filtered)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
     <div className='grey' style={{backgroundColor:'lightgray',height:'740px'}}>
    <div className='add' style={{display:'flex',gap:'20px'}} >
    {data.length>0?(<>
    {data.map((item)=>(
         <Card  style={{ width: '18rem',height:'560px',backgroundColor:'black',color:'white',marginTop:'50px'}}>
         <Card.Img variant="top" src={item.foodImage} style={{height:'180px',width:'180px',marginLeft:'50px',padding:'20px'}}/>
         <Card.Body>
           <Card.Title></Card.Title>
           <Card.Text>
           Availability:
           {item.availability}
           </Card.Text>
           <Card.Text>
           Category:
           {item.category}
           </Card.Text>
           <Card.Text>
           createdAt:
           {item.createdAt}
           </Card.Text>
           <Card.Text>
           Description:
           {item.description}
           </Card.Text>
           <Card.Text>
           Name:
           {item.name}
           </Card.Text>
           <Card.Text>
           Preparation time:
           {item.preparationTime}
           </Card.Text>
           <Card.Text>
           Price:
           {item.price}
           </Card.Text>
           <Button className='bttn' type='submit' onClick={()=>buttonClick(item._id)} >DELETE</Button>
         </Card.Body>
         
       </Card>  
    )
    )}
    </>)
:(
  <>
<h2 style={{color:'red',fontFamily:'cursive',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>Add Items is Empty.Please Add</h2> 
  </>
)      
    }
    </div>
    </div>
    </>
  )
}
export default Viewitem
