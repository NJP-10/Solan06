import './HomeScreen.css'
import { ReactComponent as PortfolioIcon } from './portfolio.svg';
import { ReactComponent as NameIcon } from './name.svg';

function HomeScreen() {

  return (
    <div className='homescreen'>
      <div className='bg-home'>
        <div className='svg-container'>
          <PortfolioIcon className="portfolio-image" />
          <NameIcon className="name-svg" />
        </div>
        <div className='scroll'>
          <p className='scroll-text'>Scroll Down</p>
          <p className='scroll-arrow'>v</p>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
