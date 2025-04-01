import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbarwe from '../Compoents/Navbarwe'
import '../Pages/Main.css'

const Riceitem = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
      axios.get(" ").then((response)=>{
          console.log(response)
          setData(response.data.data)
      }).catch((error)=>{
          console.log(error)
      })

  },[])
  return (
    <>
   
    <div className='main'>
    <Navbarwe/>
      
      
    </div>
    </>
  )
}

export default Riceitem
