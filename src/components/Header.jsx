import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
     <Navbar expand="lg" className="bg-primary" style={{ height: '95px'}}>
          <Container fluid>
            <Navbar.Brand>
                <div className='d-flex ms-3'>
                <i class="fa-solid fa-blog text-light fa-2x"></i>
              <h1 className='text-light fw-1 ms-3'>BLOGGER</h1>
                </div>
           
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="w-100 justify-content-center mt-5 mx-auto ms-5" style={{ maxHeight: '100px' }}>
                {/* <Nav.Link className="nav-link ms-2 text-light">CREATE BLOG</Nav.Link> */}
                
              </Nav>
              
              
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header
