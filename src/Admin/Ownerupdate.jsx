import axios from 'axios'
import React, { useState } from 'react'

const Ownerupdate = () => {
    const[update,setUpdate]=useState([])
    const[error,setError]=useState({})
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
    if(!update.spicylevel){
        errormsg.spicylevel="enter spicylevel"
    }
    if(!update.time){
        errormsg.time="enter time"
    }
    setError(errormsg)
    return Object.keys(errormsg).length===0
   }


   const formdata=new FormData()
   formdata.append("foodImage",update.foodImage)
   formdata.append("name",update.name)
   formdata.append("description",update.description)
   formdata.append("price",update.price)
   formdata.append("category",update.category)
   formdata.append("isVeg",update.isVeg)
   formdata.append("availability",update.availability)
   formdata.append("Ingredients",update.Ingredients)
   formdata.append("Spicylevel",update.Spicylevel)
   formdata.append("time",update.time)


   const handleSubmit=(e)=>{
    if(!validate()){
      console.log("error")
  }
  e.preventDefault()
  const prdId= localStorage.getItem("id")
  console.log('prdId')
   axios.post(`https://reactecomapi.onrender.com/foods/updatefood/${prdId}`,formdata).then((response)=>{
       console.log(response)
   }).catch((error)=>{
       console.log(error)
   })
}
       
  return (
    <div>
       <form>
      <label>{error.foodImage}Image<input type="file" name='foodImage' onChange={fileChange} />
      </label>
      <label>{error.name}Name<input type="text" name='name' onChange={handleChange} />
      </label>
      <label>{error.description}Description<input type="text" name='description' onChange={handleChange}/>
      </label>
      <label>{error.price}Price<input type="number" name='price' onChange={handleChange}/>
      </label>

      <label>{error.availability}Availability
        True<input type="radio" value="true" onChange={handleChange} name='availability'/>
        False<input type="radio" value="false"  onChange={handleChange}/>
      </label>

      <label>{error.category}Categeory<input type="text" name='category' onChange={handleChange}/>
      </label>

      <label>{error.isVeg}Isveg
        True<input type="radio" value="true" onChange={handleChange} name='isVeg'/>
        False<input type="radio" value="false" onChange={handleChange}/>

      </label>
      <label>{error.ingredients}Ingredient<input type="text" name='ingredients' onChange={handleChange}/>
      </label>
      <label>{error.spicylevel}Spicylevel<input type="text" name='spicylevel' onChange={handleChange}/>
      </label>
      <label>{error.time}Time<input type="time" name='time' onChange={handleChange}/>
      </label>
      <button type='submit'  onClick={handleSubmit}>UPDATE</button>
    </form>
    </div>
  )
}
export default Ownerupdate
