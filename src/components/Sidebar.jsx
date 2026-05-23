import {useState} from 'react'
import './Sidebar.css'
import Commissions from '../Screens/Commissions'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const [showCommissions, setShowCommissions] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const handleCommissionClick = () => {
    setShowCommissions(true);
    setIsOpen(false);
  };
  const handleCloseCommissions = () => {
    setShowCommissions(false);
  }

  return (
    <div>
      <button className='hamburger' onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <a href="#home" className='navlink' onClick={closeSidebar}>Home</a>
      <a href="#profile" className='navlink' onClick={closeSidebar}>About me</a>
      <a href="#gallery" className='navlink' onClick={closeSidebar}>Gallery</a>
      <a href="#commissions" className='navlink' onClick={handleCommissionClick}>Commissions</a>
    </div>
    {showCommissions && <Commissions onClose={handleCloseCommissions} />}
    </div>
  )
}

export default Sidebar
