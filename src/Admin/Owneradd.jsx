import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../Admin/View.css'

const Owneradd = () => {
 const[item,setItem]=useState([])
 const[error,setError]=useState({})
    const handleChange=(e)=>{
      setItem({...item,[e.target.name]:e.target.value})
      console.log(item)
    }

    const fileChange=(e)=>{
        
        setItem({...item, foodImage:e.target.files[0]})
        console.log(item)
    }

    const validate=()=>{

    const errorMessage={}
    if(!item.foodImage){
        errorMessage.foodImage="Upload image"
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
    if(!item.isVeg){
        errorMessage.isVeg="Enter isVeg"
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


   const formdata=new FormData()
   formdata.append("foodImage",item.foodImage)
   formdata.append("name",item.name)
   formdata.append("description",item.description)
   formdata.append("price",item.price)
   formdata.append("category",item.category)
   formdata.append("isVeg",item.isVeg)
   formdata.append("availability",item.availability)
   formdata.append("Ingredients",item.Ingredients)
   formdata.append("Spicylevel",item.Spicylevel)
   formdata.append("time",item.time)

    const handleSubmit=(e)=>{
         if(!validate()){
           console.log("error")
           toast.error('validation failed')
       }
       e.preventDefault()
       const loginId= localStorage.getItem("loginId")
        axios.post(`https://reactecomapi.onrender.com/foods/addfood/${loginId}`,formdata).then((response)=>{
            console.log(response)
             toast.success('successfully')
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <>
    <div style={{backgroundColor:'lightgray',height:'740px',marginTop:'-100px'}}>
        <h6 style={{marginTop:'100px',marginLeft:'30px',padding:"20px"}}>ITEM DETAILS</h6>{<br></br>}
        <form className='fm' style={{gap:"15px"}}>
        <label style={{color:'red'}}>{error.image}<input className='imgfrm' type="file"  placeholder='Image' name='foodImage' onChange={fileChange} /></label>{<br></br>}
      <label style={{color:'red'}}>{error.name}<input type="text"  placeholder='Name' name='name' onChange={handleChange} /></label>
      <label style={{color:'red'}}>{error.description}<input type="textArea"  placeholder='Description'  name='description' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.price}<input type="number"  placeholder='Price' name='price' onChange={handleChange}/></label>
      <label >{error.availability}
        Availability:
        True<input type="radio" value='true'  name='availability' onChange={handleChange}/>
        False<input type="radio" value='false'  name='availability' onChange={handleChange}/></label>{<br></br>}
        <label style={{color:'red'}}>{error.category}<input type="text"  placeholder='Category' name='category' onChange={handleChange}/></label>
      <label >{error.isVeg }
        Veg:
        True<input type="radio" value='true'  name='isVeg' onChange={handleChange}/>
      False<input type="radio" value='false'  name='isVeg' onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.Ingredients}<input type="text"  placeholder='Ingredients' name='Ingredients'  onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.Spicylevel}<input type="text"  placeholder='Spicy level' name='Spicylevel'  onChange={handleChange}/></label>
      <label style={{color:'red'}}>{error.time}<input type="time"  placeholder='preparation Time' name='time'  onChange={handleChange}/></label>{<br></br>}
      <button type="submit" className='btn3' onClick={handleSubmit} >Add</button>
    </form>
    </div>
    </>
  )
}
export default Owneradd;
