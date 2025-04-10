import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <>
<Navbar expand="sm" className="">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'50px',color:'orangered',padding:'20px'}}>TASTYHUG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" style={{padding:'20px',color:'white'}} >USERS</Nav.Link>
            <Nav.Link href="/owner" style={{padding:'20px',color:'white'}} >OWNERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
     </>
  )
}
export default Navbars
