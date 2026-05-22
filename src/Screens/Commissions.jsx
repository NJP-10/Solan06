import React from 'react'
import './Commissions.css';

function Commissions(props) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose()
    }
  }
  return (
    <div className='commissions'>
      <img src="../gif/drawin.gif" alt="Drawin" className='drawin' />
      <img src="../images/comms.webp" alt="Commissions" className='commissions-image' />
    <button onClick={handleBackgroundClick} className='close-button'>x</button>
    {props.children}
    </div>
  )
}

export default Commissions
