import { useRef } from "react";
import {Container, Row, Card, Col} from 'react-bootstrap'
import './Profile.css'

function Profile() {
  const cardRef = useRef(null);

  return (
    <div className='profile'>
      <Container>
            <Card ref={cardRef} className='profile-card'>
              <img src="../gif/pfp.gif" alt="Profile" className="profile-image" />
              <Card.Body>
                <Card.Title><strong>So.Lan06</strong></Card.Title>
                <Card.Text>
                  <p>Hi 🐐 im SoLAN, a goat living inside your computer</p>
                  <p>I am an illustrator focusing in character art and design with bold lighting, texture, and color!</p>
                </Card.Text>
                <Row className="links-row">
                  <Col className='links-col'>
                    <Card.Text className='links'>
                      <a href="https://www.instagram.com/so.lan06/" target="_blank" rel="noopener noreferrer" className="soc-link">instagram</a>
                      <a href="https://x.com/so_lan06?s=21" target="_blank" rel="noopener noreferrer" className="soc-link">twitter</a>
                      <a href="https://www.tiktok.com/@so.lan06" target="_blank" rel="noopener noreferrer" className="soc-link">tiktok</a>
                      <a href="https://vgen.co/so_lan06" target="_blank" rel="noopener noreferrer" className="soc-link">vgen</a>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
      </Container>
    </div>
  )
}

export default Profile
