import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import {dataSkills} from './components/SkillsSection/Data'
import {dataProjects} from './components/ProjectsSection/Data'


function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection/>
      <AboutMeSection/>
      <SkillsSection {...dataSkills}/>
      <ProjectsSection {...dataProjects}/>
    </>
  );
}

export default App;
