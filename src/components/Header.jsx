import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'
import './Header.css';

function Header() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand className="logo-nav">SO.LAN06</Navbar.Brand>
            <Nav.Link href="#home"className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#profile" className='nav-link'>Profile</Nav.Link>
            <Nav.Link href="#gallery" className='nav-link'>Gallery</Nav.Link>
            <Nav.Link href="#commissions" className='nav-link'>Commissions</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Header
