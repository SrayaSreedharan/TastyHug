import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Pages/Weoffer.css'
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
    <div className='img ' style={{height:'750px'}}>
    <Navbarwe/>
    <div className='row'>
    <Card style={{ width: '14rem',height:'200px'}}>
      <Card.Img src={image} style={{height:'100px',width:'220px'}} />
      <Card.Body>
        <Button type='button' style={{width:'220px'}}> <a href='/steam'>STEAMED FOODS</a></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem',height:'200px'}}>
      <Card.Img src={image1} style={{height:'100px',width:'220px'}} />
      <Card.Body>
        <Button type='button' style={{width:'220px'}}><a href='/Arabic'>ARABIC FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image2} style={{height:'100px',width:'220px'}} />
      <Card.Body>
        <Button type='button' style={{width:'220px'}}> <a href='/rice'>RICE ITEMS</a></Button>
      </Card.Body>
    </Card>
    </div>{<br></br>}
    <div className='row2' style={{display:'flex',padding:'10px',gap:'15px'}}>
    <Card style={{ width: '14rem',height:'200px',flexDirection:'column'}}>
      <Card.Img src={image3} style={{height:'100px',width:'220px'}}/>
      <Card.Body>
        <Button type='button' style={{width:'220px'}}><a href='/italian'>ITALIAN FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image4} style={{height:'100px',width:'220px'}} />
      <Card.Body>
        <Button type='button' style={{width:'220px'}}><a href='/seafood'>SEA FOOD</a></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem' ,height:'200px'}}>
      <Card.Img src={image5} style={{height:'100px',width:'220px'}} />
      <Card.Body>
        <Button type='button' style={{width:'220px'}}><a href='/veg'>VEG ITEMS</a></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}
export default Weoffer
