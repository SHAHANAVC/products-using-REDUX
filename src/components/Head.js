import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";

function Head() {
  return (
    
       <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><i class="bi bi-house"></i>Navbar</Navbar.Brand>
          <Nav  className="m-auto">
            {/* <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <div className='text-white '>
        <h4><i class="bi bi-instagram p-2"></i>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i class="bi bi-linkedin"></i>
        </h4>
        </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Head