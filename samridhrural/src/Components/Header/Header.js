import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

const Header = () => {
  return (
    <>
  {['lg'].map((expand) => (
    <Navbar key={expand} expand={expand} className="navbar__main mb-3">
      <Container>
        <Navbar.Brand className="justify-content-end flex-grow-1 pe-5" >Samriddh Rural</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-5">
              <NavLink className="navbar__list pe-4" to='/'>Home</NavLink>
              <NavLink className="navbar__list pe-4" to='/about'>About Us</NavLink>
              <NavLink className="navbar__list pe-4" to='/service'>Services</NavLink>
              <NavLink className="navbar__list pe-4" to='/contact'>Contact</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
    </>
  )
}

export default Header