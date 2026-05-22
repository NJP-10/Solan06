import React, {useState} from 'react'
import './Gallery.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import gallery from '../Gallery'
import Commissions from './Commissions'
import ImgPopup from '../components/ImgPopup'
import { ReactComponent as Gallerysvg } from './gallery.svg';

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
        <Gallerysvg className="gallery-svg" />
        <div className='gallery-text'>Illustrations</div>
        <Row className='gallery-row'>
          {gallery.map((item) => (
            <Col key={item._id} className='gallery-col'>
              <Card className='gallery-card'>
                <img src={item.image} alt={item.category} className='gallery-image' onClick={() => handleImageClick(item.image)} />
              </Card>
            </Col>
          ))}
        </Row>
        <div className='gallery-text'>Reference Sheet</div>
        <img src="../images/refsheet.webp" alt="Reference Sheet" className='reference' onClick={() => handleImageClick("../images/refsheet.webp")} />
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
