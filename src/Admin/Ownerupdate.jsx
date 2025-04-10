import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Admin/Update.css'

const Ownerupdate = () => {
    const[update,setUpdate]=useState([])
    const[error,setError]=useState({})
   
    useEffect(()=>{
      const prdId=localStorage.getItem("prdId")
      axios.get(`https://reactecomapi.onrender.com/foods/getfood/${prdId}`).then((response)=>{
        console.log(response)
        setUpdate(response.data.product)
      }).catch((error)=>{
        console.log(error)
      })
    },[])

    const handleChange=(e)=>{
        setUpdate({...update,[e.target.name]:e.target.value})
        console.log(update)
    }

    const fileChange=(e)=>{
        setUpdate({...update, foodImage:e.target.files[0]})
        console.log(update)
    }

    const validate=()=>{

    const errormsg={}
    if(!update.foodImage){
        errormsg.foodImage="Upload Image"
    }
    if(!update.name){
        errormsg.name="enter name"
    }
    if(!update.description){
        errormsg.description="enter name"
    }
    if(!update.price){
        errormsg.price="enter price"
    }
    if(!update.availability){
        errormsg.availability="enter Availability"
    }
    if(!update.category){
        errormsg.category="enter category"
    }
    if(!update.isVeg){
        errormsg.isVeg="enter isVeg"
    }
    if(!update.ingredients){
        errormsg.ingredients="enter ingredients"
    }
    if(!update.spiceLevel){
        errormsg.spiceLevel="enter spiceLevel"
    }
    if(!update.preparationTime){
        errormsg.preparationTime="enter time"
    }
    setError(errormsg)
    return Object.keys(errormsg).length===0
   }

const buttonClick=(e)=>{
    e.preventDefault()

  if(!validate()){
          console.log("error")     
  }

  const formdata=new FormData()
  formdata.append("foodImage",update.foodImage)
  formdata.append("name",update.name)
  formdata.append("description",update.description)
  formdata.append("price",update.price)
  formdata.append("category",update.category)
  formdata.append("isVeg",update.isVeg)
  formdata.append("availability",update.availability)
  formdata.append("ingredients",update.ingredients)
  formdata.append("spiceLevel",update.spiceLevel)
  formdata.append("preparationTime",update.preparationTime)
    
  const prdId= localStorage.getItem("prdId")
  console.log('prdId')
   axios.put(`https://reactecomapi.onrender.com/foods/updatefood/${prdId}`,formdata).then((response)=>{
       console.log(response)
   }).catch((error)=>{
       console.log(error)
   })
}
       
  return (
    <>
       <div style={{backgroundColor:'lightgray',height:'740px'}}>
       <form className='frmup'>
       <h3>Update Item Details</h3>
       <img src={update.foodImage} style={{height:'150px',width:'150px'}}></img>
      <label>{error.foodImage}<input type="file" name='foodImage' onChange={fileChange}></input>
      </label>
      <label>{error.name}Name:<input type="text" name='name' value={update.name} onChange={handleChange} />
      </label>
      <label>{error.description}Description:<input type="text" name='description' value={update.description} onChange={handleChange}/>
      </label>
      <label>{error.price}Price:<input type="number" name='price' value={update.price} onChange={handleChange}/>
      </label>
      <label>{error.availability}Availability:
        True<input type="radio" value="true" checked={update.availability===true} onChange={handleChange}  name='availability' />
        False<input type="radio" value="false" checked={update.availability===false} onChange={handleChange}/>
      </label>
      <label>{error.category}Categeory<input type="text" name='category' onChange={handleChange} value={update.category}/>
      </label>
      <label>{error.isVeg}Isveg:
        True<input type="radio" value="true"  checked={update.isVeg===true} onChange={handleChange} name='isVeg'/>
        False<input type="radio" value="false" checked={update.isVeg===false}  onChange={handleChange} name='isVeg' />
      </label>
      <label>{error.ingredients}Ingredient:<input type="text" name='ingredients' onChange={handleChange} value={update.ingredients}/>
      </label>
      <label>{error.spiceLevel}Spicylevel:<input type="text" name='spiceLevel' onChange={handleChange} value={update.spiceLevel}/>
      </label>
      <label>{error.time}Time:<input type="number" name='preparationTime' onChange={handleChange} value={update.preparationTime}/>
     </label>{<br></br>}
      <button type='submit' className='btn3' onClick={buttonClick}style={{backgroundColor:'green',borderColor:'green',color:'white'}}>Success</button>
    </form>
    </div>
    </>
  )
}
export default Ownerupdate
