import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Pages/Weoffer.css'
import image from '../Pages/back.jpeg';
import Navbarwe from '../Compoents/Navbarwe';

const Weoffer = () => {
  return (
    <>
    <div className='img'>
    <Navbarwe/>
    <div className='row'>
    <Card style={{ width: '14rem',height:'300px',border: '1px solid black'}}>
      <Card.Img src={image} style={{height:'100px',width:'100px'}} />
      <Card.Body>
        <Card.Title>hjkhj</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button type='button' style={{width:'180px'}}>Explore</Button>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem',height:'300px',border: '1px solid black'}}>
      <Card.Img src={image} style={{height:'100px',width:'100px'}} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button type='button' style={{width:'180px'}}>Explore</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' ,height:'300px',border: '1px solid black'}}>
      <Card.Img src={image} style={{height:'100px',width:'100px'}} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button type='button' style={{width:'180px'}}>Explore</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem',height:'300px' ,border: '1px solid black'}}>
      <Card.Img src={image} style={{height:'100px',width:'100px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button type='button' style={{width:'180px'}}>Explore</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' ,height:'300px',border: '1px solid black'}}>
      <Card.Img src={image} style={{height:'100px',width:'100px'}} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button type='button' style={{width:'180px'}}>Explore</Button>
      </Card.Body>
    </Card>
      
    </div>
    </div>
    </>
  )
}

export default Weoffer
