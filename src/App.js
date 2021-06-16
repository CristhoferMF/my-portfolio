import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'
import {dataSkills} from './components/SkillsSection/Data'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection/>
      <AboutMeSection/>
      <SkillsSection {...dataSkills}/>
    </>
  );
}

export default App;
