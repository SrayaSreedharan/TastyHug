import React from 'react'
import image from '../Admin/user.png'
import { IoMdSearch } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import Card from 'react-bootstrap/Card';

const Homead = () => {
  return (
    <>
    <div style={{height:'40px',width:'1530px',backgroundColor:' rgb(0, 0, 255)',color:'white'}}>
    <h5 style={{padding:'5px'}}>TASTYHUG <IoMdSearch style={{marginLeft:'1100px'}} /><IoMailOpenOutline style={{marginLeft:'1250px',marginTop:'-52px'}} />
      <IoNotificationsOutline style={{marginLeft:'1300px',marginTop:'-95px'}}/>
      <h5 style={{padding:'5px',marginLeft:'1380px',marginTop:'-75px'}}><a href='/login'>Logout</a></h5>
    </h5>
    </div>
    <div style={{height:'680px',width:'200px',backgroundColor:'black',color:'white'}}>{<br></br>}
    <img src={image} style={{height:'90px',marginLeft:'50px'}}></img>
    <h5 style={{textAlign:'center'}}>SRAYA SREEDHARAN{<br></br>}Lollino Resturant</h5>{<br></br>}
    <BiSolidDashboard /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}>Dash Board</h6>
    {/* <FaRegUser /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}>Users</h6> */}
    <IoAddCircleOutline /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}}><a href='/add'>Add Items</a></h6>
    <CiViewList /> <h6 style={{fontSize:'15px',marginLeft:'24px',marginTop:'-18px'}} >< a href='/view'>View Items</a></h6>
    </div>
    <div style={{height:'680px',width:'1400px',marginLeft:'200px',marginTop:'-730px'}}>
      <div style={{display:'flex',justifyContent:'center',gap:'80px'}}>
    <Card style={{ width: '18rem',marginTop:'100px' ,backgroundColor:'lightpink'}}>
      <Card.Body>
      <Card.Title>Total Sale</Card.Title>
        <Card.Text>
         3000 Items
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginTop:'100px',backgroundColor:' #5cd6d2' }}>
      <Card.Body>
      <Card.Title>Weekly Add</Card.Title>
        <Card.Text>
         30 Items
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginTop:'100px',backgroundColor:'#6ad147'}}>
      <Card.Body>
      <Card.Title>Weekly Sales</Card.Title>
        <Card.Text>
         10 Above Items
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Homead

