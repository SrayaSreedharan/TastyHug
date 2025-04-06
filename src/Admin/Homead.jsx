import React from 'react'
import image from '../Admin/user.png'
import { IoMdSearch } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

const Homead = () => {
  return (
    <>
    <div style={{border:'1px solid black',height:'40px',width:'1530px',backgroundColor:' rgb(0, 0, 255)',color:'white'}}>
    <h5 style={{padding:'5px'}}>TASTYHUG <IoMdSearch style={{marginLeft:'1100px'}} /><IoMailOpenOutline style={{marginLeft:'1250px',marginTop:'-52px'}} />
      <IoNotificationsOutline style={{marginLeft:'1300px',marginTop:'-95px'}}/>
      <h5 style={{padding:'5px',marginLeft:'1380px',marginTop:'-75px'}}><a href='/login'>Logout</a></h5>
    </h5>
    </div>
    <div style={{border:'1px solid black',height:'730px',width:'200px',backgroundColor:'black',color:'white'}}>
    <img src={image} style={{height:'90px',marginLeft:'50px'}}></img>
    <h5 style={{textAlign:'center'}}>ADMIN</h5>{<br></br>}
    <BiSolidDashboard /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}>Dash Board</h6>
    <FaRegUser /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}>Users</h6>
    <IoAddCircleOutline /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}><a href='/add'>Add Items</a></h6>
    <CiViewList /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}} >< a href='/view'>View Items</a></h6>
    </div>
    </>
  )
}

export default Homead

