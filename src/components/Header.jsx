import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'
import './Header.css';

function Header({ isInGallery }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar className={`navbar ${isInGallery ? 'in-gallery' : ''}`}>
      <Container>
        <Navbar.Brand className="logo-nav">SO.LAN06</Navbar.Brand>
            <Nav.Link href="#home" onClick={handleHomeClick} className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#profile" className='nav-link'>Profile</Nav.Link>
            <Nav.Link href="#gallery" className='nav-link'>Gallery</Nav.Link>
            <Nav.Link href="#commissions" className='nav-link'>Commissions</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Header
