import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import './App.css';
import Gallery from "./Screens/Gallery";
import Profile from "./Screens/Profile";


function App() {
  const profileRef = useRef(null);

  useEffect(() => {
    let hasSlideInTriggered = false;
    
    const handleProfileScroll = () => {
      if (!profileRef.current) return;

      const profileRect = profileRef.current.getBoundingClientRect();
      const profileTop = profileRect.top;
      const vh = window.innerHeight;
      const triggerOffset = 300;

      if (profileTop < vh - triggerOffset) {
        if (!hasSlideInTriggered) {
          profileRef.current.classList.add("slide-in");
          hasSlideInTriggered = true;
        }
      }
    };

    window.addEventListener("scroll", handleProfileScroll);
    return () => window.removeEventListener("scroll", handleProfileScroll);
  }, []);
  
  return (
    <div className='background'>
      <div id="home">
        <HomeScreen />
      </div>
      <div id="profile" ref={profileRef}>
        <Profile />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
