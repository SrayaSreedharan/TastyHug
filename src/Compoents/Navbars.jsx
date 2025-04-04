import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <>
<Navbar expand="sm" className="">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'50px',color:'orangered',padding:'10px'}}>TASTYHUG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{padding:'10px',color:'white'}} >HOME</Nav.Link>
            <Nav.Link href="/login" style={{padding:'10px',color:'white'}} >LOGIN</Nav.Link>
            <Nav.Link href="/signup" style={{padding:'10px',color:'white'}} >SIGNUP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
     </>
  )
}
export default Navbars
