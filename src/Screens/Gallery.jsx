import React, {useState} from 'react'
import './Gallery.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import gallery from '../Gallery'
import Commissions from './Commissions'
import ImgPopup from '../components/ImgPopup'
import { ReactComponent as PortfolioIcon } from './portfolio.svg';

function Gallery() {
  const [showCommissions, setShowCommissions] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showImgPopup, setShowImgPopup] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImgPopup(true);
  }
  const handleCloseImgPopup = () => {
    setShowImgPopup(false);
    setSelectedImage(null);
  }

  const handleCommissionClick = () => {
    setShowCommissions(true);
  };
  const handleCloseCommissions = () => {
    setShowCommissions(false);
  }

  return (
    <div className='gallery'>
      <Container className='gallery-container'>
        <PortfolioIcon className="portfolio-image" />
        <Row className='gallery-row'>
          {gallery.map((item) => (
            <Col key={item._id} className='gallery-col'>
              <Card className='gallery-card'>
                <img src={item.image} alt={item.category} className='gallery-image' onClick={() => handleImageClick(item.image)} />
              </Card>
            </Col>
          ))}
        </Row>
        <button className='comm-btn' onClick={handleCommissionClick}>
          commission info
        </button>
      </Container>
      {showImgPopup && <ImgPopup image={selectedImage} onClose={handleCloseImgPopup} />}
      {showCommissions && <Commissions onClose={handleCloseCommissions} />}
    </div>
  )
}

export default Gallery
