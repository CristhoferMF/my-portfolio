import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import {dataSkills} from './components/SkillsSection/Data'
import {dataProjects} from './components/ProjectsSection/Data'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection/>
      <AboutMeSection/>
      <SkillsSection {...dataSkills}/>
      <ProjectsSection {...dataProjects}/>
    </Router>
  );
}

export default App;
