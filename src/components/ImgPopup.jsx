import React from 'react'
import './ImgPopup.css';

function ImgPopup(props) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose()
    }
  }

  return props.image ? (
    <div className='popup' onClick={handleBackgroundClick}>
      <div className='popup-content'>
        <img src={props.image} alt="Popup" className='popup-image' />
      </div>
      {props.children}
    </div>
  ) : null
}

export default ImgPopup
