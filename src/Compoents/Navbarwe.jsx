import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbarwe = () => {
  return (
    <>
    <div className='nav' >
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">TASTYHUG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/weoffer" style={{padding:'20px'}}>WEOFFERED</Nav.Link>
            <Nav.Link href="/weoffer" style={{padding:'20px'}}>ADD CART</Nav.Link>
            <Nav.Link href="/weoffer" style={{padding:'20px'}}>ORDERS</Nav.Link>
          </Nav>
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" 
            />
            <Button variant="outline-success" style={{width:'90px',backgroundColor:'black'}}>LOGOUT</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>







































  {/* <div className='nav2'>
    <Navbar expand="lg" className="bg-body-tertiary row" >
    <Container>
      <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'50px',color:'orangered',fontFamily:'Times New Roman'}} >TASTYHUG</Navbar.Brand> 
      <Nav.Link href="/weoffer" style={{textDecoration:'none',fontFamily:'Times New Roman',color:'white'}} className='nav2' >WE OFFERED</Nav.Link>
      <Nav.Link href="/" style={{textDecoration:'none',fontFamily:'Times New Roman',color:'white'}} className='nav2' >LOGOUT</Nav.Link>
    </Container>
  </Navbar>
  </div> */}
  </>
  )
}

export default Navbarwe
