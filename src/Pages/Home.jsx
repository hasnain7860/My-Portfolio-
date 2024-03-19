import React from 'react'
import Navbar from '../Component/Navbar/Navbar.jsx'
import HomeScreen from '../Component/HomeScreen/HomeScreen.jsx'
import ProjectScreen from '../Component/ProjectScreen/ProjectScreen.jsx'
const Home = () => {
  return (
    <div className="">
    <HomeScreen/>
    <Navbar/>
    <ProjectScreen/>
    </div>
  )
}

export default Home