import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'C:/TastyHug/src/Pages/Weoffer.css'
import image from '../Pages/img1.jpeg';
import image1 from '../Pages/img8.jpeg';
import image2 from '../Pages/img6.jpeg';
import image3 from '../Pages/img4.jpeg';
import image4 from '../Pages/img5.jpeg';
import image5 from '../Pages/img2.jpeg';
import Navbarwe from '../Compoents/Navbarwe';

const Weoffer = () => {
  return (
    <>
    <link rel="stylesheet" href="Weoffer.css"/>
    <div className='img5 '>
    <Navbarwe/>
    <div className='row'>
    <Card className='crd' style={{ width: '14rem',height:'200px'}}>
      <Card.Img src={image} style={{height:'100px',width:'220px',borderRadius:'0px'}} />
      <Card.Body>
        <Button type='button'  className='btn2' style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}> <a href='/steam'>STEAMED FOODS</a></Button>
      </Card.Body>
    </Card>
    <Card className='crd' style={{ width: '14rem',height:'200px'}}>
      <Card.Img src={image1} style={{height:'100px',width:'220px',borderRadius:'0px'}} />
      <Card.Body>
        <Button type='button' className='btn2'  style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}><a href='/Arabic'>ARABIC FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card  className='crd' style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image2} style={{height:'100px',width:'220px',borderRadius:'0px'}} />
      <Card.Body>
        <Button type='button' className='btn2' style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}> <a href='/rice'>RICE ITEMS</a></Button>
      </Card.Body>
    </Card>
    </div>{<br></br>}
    <div className='row2' style={{display:'flex',padding:'10px'}}>
    <Card className='crd' style={{ width: '14rem',height:'200px'}}>
      <Card.Img src={image3} style={{height:'100px',width:'220px',borderRadius:'0px'}}/>
      <Card.Body>
        <Button type='button' className='btn2' style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}><a href='/italian'>ITALIAN FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card  className='crd' style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image4} style={{height:'100px',width:'220px',borderRadius:'0px'}} />
      <Card.Body>
        <Button type='button' className='btn2' style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}><a href='/seafood'>SEA FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card  className='crd' style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image5} style={{height:'100px',width:'220px',borderRadius:'0px'}} />
      <Card.Body>
        <Button type='button' className='btn2' style={{width:'220px',marginLeft:'-14px',marginTop:'-10px'}}><a href='/veg'>VEG ITEMS</a></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}
export default Weoffer
