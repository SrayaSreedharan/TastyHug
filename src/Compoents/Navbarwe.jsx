import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbarwe = () => {
  return (
    <>
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'50px',color:'orangered',fontFamily:'Times New Roman'}} >TASTYHUG</Navbar.Brand> 
      <Nav.Link href="/weoffer" style={{textDecoration:'none',marginLeft:'780px',fontFamily:'Times New Roman',color:'white'}} className='nav' >WE OFFERED</Nav.Link>
      <Nav.Link href="/" style={{textDecoration:'none',fontFamily:'Times New Roman',color:'white'}} className='nav' >LOGOUT</Nav.Link>
    </Container>
  </Navbar>
  </div>

  <div className='nav2'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'50px',color:'orangered',fontFamily:'Times New Roman'}} >TASTYHUG</Navbar.Brand> 
      <Nav.Link href="/weoffer" style={{textDecoration:'none',fontFamily:'Times New Roman',color:'white'}} className='nav2' >WE OFFERED</Nav.Link>
      <Nav.Link href="/" style={{textDecoration:'none',fontFamily:'Times New Roman',color:'white'}} className='nav2' >LOGOUT</Nav.Link>
    </Container>
  </Navbar>
  </div>
  </>
  )
}

export default Navbarwe
