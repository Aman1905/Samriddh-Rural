import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

const Header = () => {
  return (
    <>
    <Navbar className="navbar__main" expand="lg">
      <Container className="navbar__items">
        <Navbar.Brand>Samriddh Rural</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="../Home/Home" className='navbar__list'><Nav.Link className="active">Home</Nav.Link></a>
            <a href="../About/About" className='navbar__list'><Nav.Link className="active">About Us</Nav.Link></a>
            <a href="../Services/Service" className='navbar__list'><Nav.Link className="active">Services</Nav.Link></a>
            <a href="../Contact/Contact" className='navbar__list'><Nav.Link className="active">Contact</Nav.Link></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header