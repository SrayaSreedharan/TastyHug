import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarwe = () => {
  return (
    <>
    <div className='nav' >
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:'50px',color:'orangered',padding:'20px'}}>TASTYHUG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '390px' }}
            navbarScroll
          >
            <Nav.Link href="/about" style={{color:'white',padding:'20px'}}>ABOUT</Nav.Link>
            <Nav.Link href="/weoffer" style={{color:'white',padding:'20px'}}>OUR MENU</Nav.Link>
            <Nav.Link href="/order" style={{color:'white',padding:'20px'}}> YOUR ORDERS</Nav.Link>
            <Nav.Link href="/contact" style={{color:'white',padding:'20px'}}>CONTACT US</Nav.Link>
            </Nav>
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Search" style={{width:'200px',marginTop:'20px'}}
            />
            <Button variant="outline-success" style={{color:'white',backgroundColor:'black',border:'none',height:'40px',marginLeft:'230px',marginTop:'-65px'}} href="/login">LOGOUT</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  </>
  )
}
export default Navbarwe
