import React from 'react'
// import Header from './Components/Header/Headertop'
// import Headerbottom from './Components/Header/Headerbottom'
import Tabscontent from './Components/Tobs/Tabssection'
import Cardpart from './Components/Cards/Cardpart'
import Joiningpart from './Components/Joining/Joiningpart'
import Contact from './Components/Formpart/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/LandingScreen/Home'
import About from './Components/LandingScreen/About'
import MediaContent from './Components/LandingScreen/MediaContent'
import Reviews from './Components/LandingScreen/Reviews'
import Header from './Components/Header/Header'
import LogoSlider from './Components/LandingScreen/Clientlogs'

export default function App() {
  return (
    <>
      {/* <Header/>
      <Headerbottom/> */}
      <Header/>
      <Home/>
      <LogoSlider/>
      <About content={[0]}/>
      <Tabscontent/>
      <Cardpart/>
      <Joiningpart/>
      <MediaContent mediaContent={[0]}/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  )
}
