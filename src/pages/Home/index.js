import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import FeaturedSection from '../../components/FeaturedSection'
import AboutMeSection from '../../components/AboutMeSection'
import SkillsSection from '../../components/SkillsSection'
import ProjectsSection from '../../components/ProjectsSection'
import {dataSkills} from '../../components/SkillsSection/Data'
import dataProjects from '../../data/projects'
import ContactSection from '../../components/ContactSection'


function Home({onThemeToggler}) {
    return (
        <>
        <Navbar onThemeToggler={onThemeToggler}/>
        <HeroSection/>
        <FeaturedSection/>
        <AboutMeSection/>
        <SkillsSection {...dataSkills}/>
        <ProjectsSection {...dataProjects}/>
        <ContactSection/>  
        </>
    )
}

export default Home
