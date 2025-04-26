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
            <Nav.Link href="/weoffer" style={{color:'white',padding:'20px'}}>MENU</Nav.Link>
            <Nav.Link href="/addcart" style={{color:'white',padding:'20px'}}>CART</Nav.Link>
            <Nav.Link href="/order" style={{color:'white',padding:'20px'}}> ORDERS</Nav.Link>
            <Nav.Link href="/contact" style={{color:'white',padding:'20px'}}>CONTACT US</Nav.Link>
            </Nav>
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Search" style={{width:'200px',marginTop:'25px'}}
            />
            <Button variant="outline-success" style={{color:'black',backgroundColor:'white',border:'none',height:'40px',marginLeft:'230px',marginTop:'-98px'}} href="/login">LOGOUT</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  </>
  )
}
export default Navbarwe
