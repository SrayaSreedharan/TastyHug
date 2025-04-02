import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <>
    <div className='nav' >
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:'30px',color:'orangered',padding:'30px'}}>TASTYHUG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{padding:'30px',marginLeft:'170px'}}>HOME</Nav.Link>
            <Nav.Link href="/login" style={{padding:'30px'}} >LOGIN</Nav.Link>
            <Nav.Link href="/signup" style={{padding:'30px'}} >SIGNUP</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  </>
  )
}
export default Navbars
