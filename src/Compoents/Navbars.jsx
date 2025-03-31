import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbars = () => {
    return (
    <>
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'50px',color:'orangered',fontFamily:'Times New Roman'}} >TASTYHUG</Navbar.Brand> 
          <Nav.Link href="/login" style={{textDecoration:'none',marginLeft:'800px',fontFamily:'Times New Roman'}} className='nav' >LOGIN</Nav.Link>
          <Nav.Link href="/signup" style={{textDecoration:'none',fontFamily:'Times New Roman'}} className='nav'>SIGN UP</Nav.Link>
    </Container>
  </Navbar>
  </div>

  <div className='nav2'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px',color:'orangered',fontFamily:'Times New Roman'}} >TASTYHUG</Navbar.Brand> 
          <Nav.Link href="/login" style={{textDecoration:'none',fontFamily:'Times New Roman'}} className='nav2'>LOGIN</Nav.Link>
          <Nav.Link href="/signup" style={{textDecoration:'none',fontFamily:'Times New Roman'}} className='nav2'>SIGN UP</Nav.Link>
    </Container>
  </Navbar>
</div>
  </>
  )
}
export default Navbars
