import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import './App.css';
import Gallery from "./Screens/Gallery";
import Profile from "./Screens/Profile";


function App() {
  const homeRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;

      const { bottom } = homeRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(Math.max((vh - bottom) / vh, 0), 1);

      const opacity = progress * 0.7;
      document.documentElement.style.setProperty("--grad-opacity", opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Header />
      <div id="home" ref={homeRef}>
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
