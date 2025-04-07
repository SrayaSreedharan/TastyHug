import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Owneradd = () => {
 const[item,setItem]=useState([])
 const[error,setError]=useState({})
    const handleChange=(e)=>{
      setItem({...item,[e.target.name]:e.target.value})
      console.log(item)
    }

    const validate=()=>{

    const errorMessage={}
    if(!item.image){
        errorMessage.image="Upload image"
    } 
    if(!item.name){
     errorMessage.name="Enter Name"
    }
    if(!item.description){
        errorMessage.description="Enter description"
    }
    if(!item.price){
        errorMessage.price="Enter price"
    }
    if(!item.category){
        errorMessage.category="Enter category"
    }
    if(!item.availability){
        errorMessage.availability="Enter Aavailability"
    }
    if(!item.isveg){
        errorMessage.isveg="Enter isVeg"
    }
    if(!item.Ingredients){
        errorMessage.Ingredients="Enter Ingredients"
    }
    if(!item.Spicylevel){
        errorMessage.Spicylevel="Enter Spicylevel"
    }
    if(!item.time){
        errorMessage.time="Enter time"
    }
  setError(errorMessage)
    return Object.keys(errorMessage).length===0
   }
    const handleSubmit=(e)=>{
         if(!validate()){
           console.log("error")
           toast.error('validation failed')
       }
       e.preventDefault()
       const loginId= localStorage.getItem("loginId")
        axios.post(`https://reactecomapi.onrender.com/foods/addfood/${loginId}`).then((response)=>{
            console.log(response)
             toast.success('successfully')
            localStorage.setItem("loginId",response.data.loginId)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <>
    <div style={{backgroundColor:'lightgray',height:'740px',marginTop:'-100px'}}>
        <h6 style={{marginTop:'100px',textAlign:'center'}}>ITEM DETAILS</h6>{<br></br>}
        <form style={{display:'flex',gap:'15px',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <label style={{color:'red'}}>{error.image}<input type="file"  placeholder='Image' name='image' onChange={handleChange} style={{marginLeft:'100px'}}/></label>  
      <label style={{color:'red'}}>{error.name}<input type="text"  placeholder='Name' name='name' onChange={handleChange} /></label>
      <label style={{color:'red'}}>{error.description}<input type="text"  placeholder='Description'  name='description' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.price}<input type="number"  placeholder='Price' name='price' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.category}<input type="text"  placeholder='Category' name='category' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.availability}<input type="text"  placeholder='Availability' name='availability' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.isveg }<input type="text"  placeholder='isVeg'  name=' isveg 'onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.Ingredients}<input type="text"  placeholder='Ingredients' name='Ingredients'  onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.Spicylevel}<input type="text"  placeholder='Spicy level' name='Spicylevel'  onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.time}<input type="time"  placeholder='preparation Time' name='time'  onChange={handleChange}/></label>
      <button type="submit" className='btn3' style={{marginLeft:'700px',marginRight:'700px'}}onClick={handleSubmit}>Add</button>
    </form>
    </div>
    </>
  )
}
export default Owneradd;
