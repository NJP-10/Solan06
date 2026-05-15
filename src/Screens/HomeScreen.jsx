import React from 'react'
import './HomeScreen.css'
import { ReactComponent as PortfolioIcon } from './portfolio.svg';
import { ReactComponent as NameIcon } from './name.svg';

function HomeScreen() {
  return (
    <div className='homescreen'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src="/bg.webm" type="video/mp4" />
      </video>
        <div className='svg-container'>
          <PortfolioIcon className="portfolio-image" />
          <NameIcon className="name-svg" />
        </div>
    </div>
  )
}

export default HomeScreen
